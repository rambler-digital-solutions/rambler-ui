import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import Spinner from '../Spinner'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@pure
@injectSheet(() => ({
  loader: {
    ...isolateMixin,
    position: 'relative',
    width: '100%',
    minHeight: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)'
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
     * Сверху контента будет показана полупрозрачная плашка
     */
    overlay: PropTypes.bool,
    /**
     * Скрытие контента во время загрузки
     */
    hideContent: PropTypes.bool
  }

  static defaultProps = {
    loading: false,
    overlay: false,
    hideContent: false
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
      overlay,
      hideContent
    } = this.props

    return (
      <div
        style={style}
        className={classnames(this.css.loader, className, loading && loadingClassName)}>
        {loading === true &&
          <Spinner
            className={classnames(spinnerClassName, overlay && this.css.overlay)}
            color={spinnerColor} />
        }
        {!(loading === true && hideContent) && children}
      </div>
    )
  }

}
