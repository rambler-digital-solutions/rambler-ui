import {PureComponent, createElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin, ifMobile} from '../utils/mixins'

const getFontStyle = ({
  fontWeight = 400,
  lineHeight,
  mobile, // eslint-disable-line no-unused-vars
  ...style
} = {}) => ({
  ...style,
  fontWeight,
  lineHeight: lineHeight && lineHeight + 'px'
})

const styles = ({typography}) => ({
  reset: isolateMixin,
  h1: {
    extend: getFontStyle(typography.h1),
    margin: '15px 0',
    ...ifMobile({
      extend: getFontStyle(typography.h1.mobile)
    })
  },
  h2: {
    extend: getFontStyle(typography.h2),
    margin: '20px 0',
    ...ifMobile({
      extend: getFontStyle(typography.h2.mobile)
    })
  },
  h3: {
    extend: getFontStyle(typography.h3),
    margin: '20px 0',
    ...ifMobile({
      extend: getFontStyle(typography.h3.mobile)
    })
  },
  text: {
    extend: getFontStyle(typography.text),
    margin: '20px 0',
    ...ifMobile({
      extend: getFontStyle(typography.text.mobile)
    })
  },
  quote: {
    extend: getFontStyle(typography.quote),
    margin: '30px 0',
    paddingLeft: 37,
    borderLeft: `3px solid ${typography.quote.borderColor}`,
    '& p': {
      margin: 0
    },
    '& p + p': {
      marginTop: 20
    }
  },
  epigraph: {
    extend: getFontStyle(typography.epigraph),
    margin: '20px 0'
  },
  source: {
    composes: '$uppercase',
    extend: getFontStyle(typography.source)
  },
  timestamp: {
    extend: getFontStyle(typography.timestamp)
  },
  description: {
    extend: getFontStyle(typography.description),
    margin: '20px 0 25px'
  },
  galleryDescription: {
    extend: getFontStyle(typography.galleryDescription)
  },
  photoSource: {
    extend: getFontStyle(typography.photoSource)
  },
  list: {
    extend: getFontStyle(typography.text),
    position: 'relative',
    margin: '30px 0',
    paddingLeft: 40,
    listStyle: 'none',
    '& li + li': {
      marginTop: 15
    },
    '& li:before': {
      position: 'absolute',
      left: 0
    },
    'ul& li:before': {
      content: '""',
      marginTop: 9,
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: typography.list.bullet.color
    },
    'ol&': {
      counterReset: 'order'
    },
    'ol& li:before': {
      extend: getFontStyle(typography.list.number),
      counterIncrement: 'order',
      content: 'counter(order)"."',
      color: typography.list.number.color
    }
  },
  uppercase: {
    textTransform: 'uppercase',
    letterSpacing: 1.3 / 11 + 'em'
  }
})

class Typography extends PureComponent {
  static propTypes = {
    /**
     * Тип элемента
     */
    type: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'text',
      'quote',
      'epigraph',
      'source',
      'timestamp',
      'description',
      'galleryDescription',
      'photoSource',
      'list'
    ]),
    /**
     * Имя тега
     */
    tagName: PropTypes.string,
    /**
     * Содержимое элемента
     */
    children: PropTypes.node,
    /**
     * Заглавные буквы
     */
    uppercase: PropTypes.bool
  }

  static defaultProps = {
    tagName: 'div'
  }

  render() {
    const {
      tagName,
      className,
      classes,
      type,
      uppercase,
      children,
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    return createElement(
      tagName,
      {
        className: classnames(
          className,
          classes.reset,
          type && classes[type],
          uppercase && classes.uppercase
        ),
        ...other
      },
      children
    )
  }
}

export default injectSheet(styles, {name: 'Typography'})(Typography)
