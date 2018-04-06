import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  loader: {
    position: 'relative',
    width: '100%',
    minHeight: '100%'
  },
  overlay: {
    position: 'absolute',
    background: theme.loader.color,
    transitionProperty: 'opacity',
    pointerEvents: 'none',
    transitionDuration: theme.loader.animationDuration,
    opacity: 0,
    zIndex: -1,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  isLoading: {
    '&$overlay': {
      opacity: 0.7,
      zIndex: 'initial'
    },
    '&$loader': {
      pointerEvents: 'none'
    }
  },
  blur: {
    filter: 'blur(1px)'
  }
}), {name: 'Loader'})
export default class Loader extends PureComponent {

  static propTypes = {
    /**
     * CSS-класс
     */
    className: PropTypes.string,
    /**
     * CSS-класс состояния загрузки
     */
    loadingClassName: PropTypes.string,
    /**
     * CSS-класс полупрозрачного оверлея
     */
    overlayClassName: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * CSS-класс спиннера
     */
    spinnerClassName: PropTypes.string,
    /**
     * Цвет спиннера
     */
    spinnerColor: PropTypes.string,
    /**
     * Состояние загрузки, либо Boolean, либо Promise
     */
    loading: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    /**
     * Контент
     */
    children: PropTypes.node,
    /**
     * Скрытие контента во время загрузки
     */
    hideContent: PropTypes.bool,
    /**
     * Блюрить контент во время загрузки
     */
    blurContent: PropTypes.bool
  }

  static defaultProps = {
    loading: false,
    hideContent: false,
    blurContent: false
  }

  state = {
    loading: false
  }

  componentDidMount() {
    this.updateLoading(this.props.loading)
  }

  componentWillReceiveProps({ loading }) {
    this.updateLoading(loading)
  }

  updateLoading(loading) {
    if (typeof loading === 'boolean') {
      this.setState({
        loading
      })
    } else {
      this.setState({
        loading: true
      })

      loading.then(() => {
        this.setState({
          loading: false
        })
      })
    }
  }

  render() {
    const { loading } = this.state

    const {
      className,
      loadingClassName,
      overlayClassName,
      style,
      classes,
      spinnerClassName,
      spinnerColor,
      children,
      hideContent,
      blurContent
    } = this.props

    return (
      <div
        style={style}
        className={classnames(classes.loader, className, loading && classnames(loadingClassName, classes.isLoading))}>
        {!(loading && hideContent) && (
          blurContent ? (
            <div className={classnames(loading && blurContent && classes.blur)}>
              {children}
            </div>
          ) :
            children
        )}
        <div className={classnames(classes.overlay, overlayClassName, loading && classes.isLoading)} />
        {loading &&
          <Spinner className={classnames(classes.spinner, spinnerClassName)} color={spinnerColor} />
        }
      </div>
    )
  }

}
