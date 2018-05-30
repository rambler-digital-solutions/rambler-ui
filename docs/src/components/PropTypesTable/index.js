import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {parse} from 'react-docgen'
import {parse as parseDoctrine} from 'doctrine'
import recast from 'recast'
import {lighten} from 'rambler-ui/utils/colors'
import injectSheet from 'docs/src/utils/theming'

@injectSheet(theme => ({
  table: {
    border: '1px solid',
    borderColor: lighten(theme.colors.cloudGray, 0.7),
    width: '100%',
    overflowX: 'auto',
    '& table': {
      fontFamily: 'Roboto, sans-serif',
      borderSpacing: 0,
      fontSize: 14,
      lineHeight: '20px'
    },
    '& td, & th': {
      padding: '15px 20px 15px 0px',
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
    '& td + td': {
      fontFamily: 'Menlo, Monaco, Courier New, Courier, monospace',
      fontSize: 13
    },
    '& td:last-child': {
      color: theme.colors.cloudGray,
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  },
  required: {
    marginTop: 20,
    fontSize: 12
  }
}))
export default class PropTypesTable extends PureComponent {

  static propTypes = {
    /**
     * Код для отображения
     */
    code: PropTypes.string
  }

  getDeprecatedInfo(type) {
    const deprecatedPropType = 'deprecated(PropTypes.'

    const indexStart = type.raw.indexOf(deprecatedPropType)

    if (indexStart !== -1)
      return {
        propTypes: type.raw.substring(indexStart + deprecatedPropType.length, type.raw.indexOf(',')),
        explanation: recast.parse(type.raw).program.body[0].expression.arguments[1].value
      }

    return false
  }

  renderPropTypes(type) {
    if (type.name === 'func')
      return 'function'

    if (type.name === 'custom') {
      const deprecatedInfo = this.getDeprecatedInfo(type)
      if (deprecatedInfo === false)
        return type.raw
      return this.renderPropTypes({name: deprecatedInfo.propTypes})
    }

    if (type.name === 'enum')
      return (
        <Fragment>
          enum:
          {type.value.map(v => <div key={v.value}>&nbsp;{v.value}</div>)}
        </Fragment>
      )

    return type.name
  }

  renderDescription (required, description, type) {
    let deprecated

    if (type.name === 'custom') {
      const deprecatedInfo = this.getDeprecatedInfo(type)

      if (deprecatedInfo)
        deprecated = (
          <Fragment>
            *Deprecated*. {deprecatedInfo.explanation}
            <br /><br />
          </Fragment>
        )
    }

    const parsed = parseDoctrine(description)

    if (parsed.tags.some(tag => tag.title === 'ignore')) return null
    let signature

    if (type.name === 'func' && parsed.tags.length > 0) {
      // Remove new lines from tag descriptions to avoid markdown errors.
      parsed.tags.forEach((tag) => {
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

      signature = (
        <Fragment>
          <br /><br />
          **Signature:**
          <div>
            `function({
              parsedArgs.map(tag => `${tag.name}: ${tag.type.name}`).join(', ')
            }) => {parsedReturns.type.name}`
          </div>
          {parsedArgs.map(tag => <div>*{tag.name}:* {tag.description}</div>)}
          {parsedReturns.description &&
            <div>
              *returns* ({parsedReturns.type.name}): {parsedReturns.description}
            </div>
          }
        </Fragment>
      )
    }

    return (
      <Fragment>
        {deprecated} {parsed.description} {signature}
      </Fragment>
    )
  }

  render() {
    const {code, classes} = this.props
    const componentInfo = parse(code)
    let requiredProps = 0

    const propsTable = Object
      .keys(componentInfo.props)
      .map(key => {
        const prop = componentInfo.props[key]
        const propType = this.renderPropTypes(prop.type)
        const description = this.renderDescription(prop.required, prop.description, prop.type)
        let propName = key

        if (description === null)
          return

        let defaultValue = ''

        if (prop.defaultValue)
          defaultValue = prop.defaultValue.value.replace(/\n/g, '')

        if (prop.required) {
          propName = <span style={{color: '#31a148'}}>{propName} *</span>
          requiredProps += 1
        }

        if (prop.type.name === 'custom')
          if (this.getDeprecatedInfo(prop.type))
            propName = <Fragment>~~{propName}~~</Fragment>

        return (
          <tr key={key}>
            <td>{propName}</td>
            <td>{propType}</td>
            <td>{defaultValue}</td>
            <td>{description}</td>
          </tr>
        )
      })

    return (
      <Fragment>
        <div className={classes.table}>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Тип</th>
                <th>Значение по-умолчанию</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              {propsTable}
            </tbody>
          </table>
        </div>
        {requiredProps > 0 &&
          <div className={classes.required}>
            * Обязательный параметр
          </div>
        }
      </Fragment>
    )
  }

}
