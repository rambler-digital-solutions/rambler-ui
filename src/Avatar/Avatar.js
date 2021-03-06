import React, {PureComponent, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import profileIcons from './profilesIconMap'
import {withStyles} from '../theme'
import {isolateMixin, middleMixin} from '../utils/mixins'

const chooseProfileSize = size =>
  size >= 75 ? [27, 15] : size >= 45 ? [22, 15] : [17, 11]

const styles = {
  avatar: {
    extend: isolateMixin,
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .15)'
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
    boxShadow: 'inset 0 0 0 1px white',
    borderRadius: '100%',
    fontSize: 0,
    textAlign: 'center'
  }
}

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

  render() {
    const {
      className,
      style,
      backgroundColor,
      iconBackgroundColor,
      src,
      size,
      shape,
      profileType,
      theme,
      classes,
      container,
      ...other
    } = this.props

    const ProfileIcon = profileType && profileIcons[profileType]
    const [profileSize, roundSize] = chooseProfileSize(size)

    const profileSizePx = profileSize + 'px'
    const children = ProfileIcon && (
      <div
        className={classes.profile}
        style={{
          backgroundColor:
            iconBackgroundColor || theme.avatar.colors.iconBackground,
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
          backgroundImage: `url(${src})`
        },
        className: classnames(classes.avatar, classes[shape], className)
      },
      children
    )
  }
}

export default withStyles(styles, {name: 'Avatar'})(Avatar)
