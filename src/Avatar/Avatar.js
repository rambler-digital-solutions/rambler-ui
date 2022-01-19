import React, {PureComponent, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import profileIcons from './profilesIconMap'
import {withStyles} from '../theme'
import {isolateMixin, middleMixin} from '../utils/mixins'

const chooseProfileSize = size =>
  size >= 75
    ? [30, 20, 2]
    : size >= 45
      ? [20, 15, 1]
      : size >= 30
        ? [15, 12, 1]
        : [11, 10, 1]

const styles = theme => ({
  avatar: {
    extend: isolateMixin,
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: theme.avatar.boxShadow
  },
  circle: {
    borderRadius: '50%',
    '& $profile': {
      transform: 'translate(10%, 10%)'
    }
  },
  rounded: {
    borderRadius: '7%'
  },
  profile: {
    extend: middleMixin,
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: 'translate(25%, 25%)',
    borderRadius: '100%',
    fontSize: 0,
    textAlign: 'center'
  }
})

class Avatar extends PureComponent {
  static propTypes = {
    /**
     * CSS-класс аватарки
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Цвет фона
     */
    backgroundColor: PropTypes.string,
    /**
     * Цвет фона иконки
     */
    iconBackgroundColor: PropTypes.string,
    /**
     * URL картинки
     */
    src: PropTypes.string.isRequired,
    /**
     * Фолбек URL картинки
     */
    fallbackSrc: PropTypes.string,
    /**
     * Размер аватарки
     */
    size: PropTypes.number,
    /**
     * Форма аватарки
     */
    shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
    /**
     * Тип профиля для отображения иконки
     */
    profileType: PropTypes.oneOf([
      'apple',
      'facebook',
      'championat',
      'google',
      'instagram',
      'livejournal',
      'mailru',
      'odnoklassniki',
      'pgumosru',
      'rambler',
      'sberbank',
      'twitter',
      'vkontakte'
    ]),
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`, или `<a />` если необходима ссылка
     */
    container: PropTypes.element
  }

  static defaultProps = {
    size: 45,
    shape: 'circle'
  }

  loader = new Image()

  state = {
    error: false
  }

  componentDidMount() {
    this.loadImage()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) this.loadImage()
  }

  componentWillUnmount() {
    this.loader.removeEventListener('error', this.onImageError)
  }

  loadImage() {
    const {src, fallbackSrc} = this.props
    if (fallbackSrc) {
      this.setState({error: false})
      this.loader.addEventListener('error', this.onImageError)
      this.loader.src = src
    }
  }

  onImageError = () => {
    this.setState({error: true})
  }

  render() {
    const {
      className,
      style,
      backgroundColor,
      iconBackgroundColor,
      src,
      fallbackSrc,
      size,
      shape,
      profileType,
      theme,
      classes,
      container,
      ...other
    } = this.props

    const ProfileIcon = profileType && profileIcons[profileType]
    const [profileSize, roundSize, borderWidth] = chooseProfileSize(size)
    const profileSizePx = profileSize + 'px'
    const imageUrl = (this.state.error && fallbackSrc) || src

    const children = ProfileIcon && (
      <div
        className={classes.profile}
        style={{
          backgroundColor:
            iconBackgroundColor || theme.avatar.colors.iconBackground,
          boxShadow: `0 0 0 ${borderWidth}px white inset`,
          width: profileSizePx,
          height: profileSizePx
        }}>
        <ProfileIcon size={roundSize} />
      </div>
    )

    return cloneElement(
      isValidElement(container) ? container : <div />,
      {
        ...other,
        style: {
          ...style,
          backgroundColor,
          width: size,
          height: size,
          backgroundImage: `url(${imageUrl})`
        },
        className: classnames(classes.avatar, classes[shape], className)
      },
      children
    )
  }
}

export default withStyles(styles, {name: 'Avatar'})(Avatar)
