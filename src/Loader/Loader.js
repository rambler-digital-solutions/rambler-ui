import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'

@pure
@injectSheet(() => ({
  loader: {
    position: 'relative',
    width: '100%',
    minHeight: '100%'
  },
  blur: {
    filter: 'blur(1px)'
  }
}))
export default class Loader extends Component {

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

  get css() {
    return this.props.sheet.classes
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
      style,
      spinnerClassName,
      spinnerColor,
      children,
      hideContent,
      blurContent
    } = this.props

    return (
      <div
        style={style}
        className={classnames(this.css.loader, className, loading && loadingClassName)}>
        {loading &&
          <Spinner className={spinnerClassName} color={spinnerColor} />
        }
        {!(loading && hideContent) && (
          blurContent ? (
            <div className={loading && blurContent && this.css.blur}>
              {children}
            </div>
          ) :
          children
        )}
      </div>
    )
  }

}
