import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {parse} from 'react-docgen'
import {parse as parseDoctrine} from 'doctrine'
import recast from 'recast'
import remark from 'remark'
import html from 'remark-html'
import {lighten} from 'rambler-ui/utils/colors'
import {withStyles, fontFamily} from 'docs/utils/theming'

const styles = theme => ({
  scrollArea: {
    margin: '25px -30px 40px',
    lineHeight: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
    '@media screen and (min-width: 768px)': {
      marginLeft: 0,
      marginRight: 0,
      width: '100%'
    }
  },
  table: {
    display: 'inline-block',
    paddingLeft: 30,
    paddingRight: 30,
    '@media screen and (min-width: 768px)': {
      paddingLeft: 0,
      paddingRight: 0,
      width: '100%'
    },
    '& table': {
      border: '1px solid',
      borderColor: lighten(theme.colors.cloudGray, 0.7),
      fontFamily: fontFamily.Roboto,
      borderSpacing: 0,
      fontSize: 14,
      lineHeight: '20px'
    },
    '& td': {
      borderTop: '1px solid',
      borderTopColor: lighten(theme.colors.cloudGray, 0.7)
    },
    '& td, & th': {
      padding: '14px 20px 14px 0px',
      verticalAlign: 'top',
      fontSize: 14,
      minWidth: '20%',
      '&:first-child': {
        paddingLeft: 20
      }
    },
    '& th': {
      backgroundColor: theme.colors.argentumLight,
      color: theme.colors.cloudGray,
      fontWeight: 400,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    },
    '& td:first-child': {
      fontWeight: 600
    },
    '& td:nth-child(2)': {
      whiteSpace: 'nowrap'
    },
    '& td + td': {
      fontFamily: fontFamily.Menlo,
      fontSize: 13
    },
    '& td:last-child': {
      color: theme.colors.cloudGray,
      fontFamily: 'inherit',
      fontSize: 'inherit'
    },
    '& code': {
      display: 'inline',
      padding: '.2em .3em',
      backgroundColor: 'rgba(238, 242, 244, .5)',
      fontFamily: fontFamily.Menlo,
      fontSize: '92%',
      lineHeight: '18px'
    }
  },
  required: {
    marginTop: 20,
    fontSize: 12
  }
})

class PropTypesTable extends PureComponent {
  static propTypes = {
    /**
     * Код для отображения
     */
    code: PropTypes.string
  }

  state = {
    propTypes: '',
    requiredProps: 0
  }

  componentDidMount() {
    this.generateTable(this.props.code)
  }

  componentDidUpdate(prevProps) {
    const {code} = this.props
    if (code !== prevProps.code) this.generateTable(code)
  }

  getDeprecatedInfo(type) {
    const deprecatedPropType = 'deprecated(PropTypes.'

    const indexStart = type.raw.indexOf(deprecatedPropType)

    if (indexStart !== -1)
      return {
        propTypes: type.raw.substring(
          indexStart + deprecatedPropType.length,
          type.raw.indexOf(',')
        ),
        explanation: recast.parse(type.raw).program.body[0].expression
          .arguments[1].value
      }

    return false
  }

  generatePropType(type) {
    switch (type.name) {
    case 'func':
      return 'function'

      /* eslint-disable no-case-declarations */
    case 'custom':
      const deprecatedInfo = this.getDeprecatedInfo(type)

      if (deprecatedInfo !== false)
        return this.generatePropType({
          name: deprecatedInfo.propTypes
        })

      return type.raw

    case 'enum':
      const values = type.value.map(v => v.value).join('<br>&nbsp;')
      return `enum:<br>&nbsp;${values}<br>`
      /* eslint-enable no-case-declarations */

    default:
      return type.name
    }
  }

  generateDescription(required, description, type) {
    let deprecated = ''

    if (type.name === 'custom') {
      const deprecatedInfo = this.getDeprecatedInfo(type)

      if (deprecatedInfo)
        deprecated = `*Deprecated*. ${deprecatedInfo.explanation}<br><br>`
    }

    const parsed = parseDoctrine(description)

    // two new lines result in a newline in the table. all other new lines
    // must be eliminated to prevent markdown mayhem.
    const jsDocText = parsed.description
      .replace(/\n\n/g, '<br>')
      .replace(/\n/g, ' ')

    if (parsed.tags.some(tag => tag.title === 'ignore')) return null
    let signature = ''

    if (type.name === 'func' && parsed.tags.length > 0) {
      // Remove new lines from tag descriptions to avoid markdown errors.
      parsed.tags.forEach(tag => {
        if (tag.description)
          tag.description = tag.description.replace(/\n/g, ' ')
      })

      // Split up the parsed tags into 'arguments' and 'returns' parsed objects. If there's no
      // 'returns' parsed object (i.e., one with title being 'returns'), make one of type 'void'.
      const parsedLength = parsed.tags.length
      let parsedArgs = []
      let parsedReturns

      if (parsed.tags[parsedLength - 1].title === 'returns') {
        parsedArgs = parsed.tags.slice(0, parsedLength - 1)
        parsedReturns = parsed.tags[parsedLength - 1]
      } else {
        parsedArgs = parsed.tags
        parsedReturns = {type: {name: 'void'}}
      }

      signature += '<br><br>**Signature:**<br>`function('
      signature += parsedArgs
        .map(tag => `${tag.name}: ${tag.type.name}`)
        .join(', ')
      signature += `) => ${parsedReturns.type.name}` + '`<br>'
      signature += parsedArgs
        .map(tag => `*${tag.name}:* ${tag.description}`)
        .join('<br>')
      if (parsedReturns.description)
        signature += `<br> *returns* (${parsedReturns.type.name}): ${parsedReturns.description}`
    }

    return `${deprecated} ${jsDocText}${signature}`
  }

  generateTable(code) {
    const componentInfo = parse(code)
    let requiredProps = 0

    const header = `
| Название | Тип | Значение по умолчанию | Описание |
|:---------|:----|:----------------------|:---------|`

    const propsTable = Object.keys(componentInfo.props).reduce(
      (content, key) => {
        const prop = componentInfo.props[key]
        const propType = this.generatePropType(prop.type)
        const description = this.generateDescription(
          prop.required,
          prop.description,
          prop.type
        )

        if (description === null) return content

        let defaultValue = ''

        if (prop.defaultValue)
          defaultValue = prop.defaultValue.value.replace(/\n/g, '')

        if (prop.required) {
          key = `<span style="color: #31a148">${key} *</span>`
          requiredProps += 1
        }

        if (prop.type.name === 'custom')
          if (this.getDeprecatedInfo(prop.type)) key = `~~${key}~~`

        return `${content}
| ${key} | ${propType} | ${defaultValue} | ${description} |`
      },
      header
    )

    remark()
      .use(html)
      .process(propsTable, (e, text) => {
        if (e) throw e
        this.setState({
          requiredProps,
          propsTable: String(text)
        })
      })
  }

  render() {
    const {propsTable, requiredProps} = this.state
    const {classes} = this.props

    return (
      <>
        <div className={classes.scrollArea}>
          <div
            className={classes.table}
            dangerouslySetInnerHTML={{__html: propsTable}}
          />
        </div>
        {requiredProps > 0 && (
          <div className={classes.required}>* Обязательный параметр</div>
        )}
      </>
    )
  }
}

export default withStyles(styles)(PropTypesTable)
