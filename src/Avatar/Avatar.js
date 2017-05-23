import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import * as profileIcons from '../icons/profiles'
import { injectSheet } from '../theme'
import { isolateMixin, middleMixin } from '../style/mixins'

@pure
@injectSheet(() => ({
  avatar: {
    ...isolateMixin,
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 0
  },
  image: {
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .15)'
  },
  circle: {
    borderRadius: '50%',
    '& + $profile': {
      transform: 'translate(20%, 20%)'
    }
  },
  rounded: {
    borderRadius: '7%'
  },
  profile: {
    ...middleMixin,
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: 'translate(50%, 50%)',
    boxShadow: '0 0 0 1px #fff',
    borderRadius: '50%',
    width: '40%',
    height: '40%',
    textAlign: 'center'
  },
  facebook: {
    backgroundColor: '#4661a3'
  },
  championat: {
    backgroundColor: '#ff790e'
  },
  google: {
    backgroundColor: '#ea4335'
  },
  instagram: {
    backgroundColor: '#c9008b'
  },
  livejournal: {
    backgroundColor: '#13374d'
  },
  mailru: {
    backgroundColor: '#ffa930'
  },
  odnoklassniki: {
    backgroundColor: '#f78408'
  },
  pgumosru: {
    backgroundColor: '#ab272b'
  },
  rambler: {
    backgroundColor: '#262626'
  },
  twitter: {
    backgroundColor: '#5d9ec9'
  },
  vkontakte: {
    backgroundColor: '#5c7da4'
  },
  icon: {
    width: '62.5% !important',
    height: '62.5% !important'
  }
}))
export default class Avatar extends Component {

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
      'facebook',
      'championat',
      'google',
      'instagram',
      'livejournal',
      'mailru',
      'odnoklassniki',
      'pgumosru',
      'rambler',
      'twitter',
      'vkontakte'
    ])
  }

  static defaultProps = {
    size: 40,
    shape: 'circle'
  }

  get css() {
    return this.props.sheet.classes
  }

  render() {
    const {
      className,
      style,
      backgroundColor,
      src,
      size,
      shape,
      profileType
    } = this.props

    const ProfileIcon = profileType &&
      profileIcons[`${profileType.replace(/^\w/, m => m.toUpperCase())}Icon`]

    return (
      <div
        style={Object.assign({}, style, {
          backgroundColor
        })}
        className={classnames(this.css.avatar, className)}>
        <img
          src={src}
          style={{
            width: size,
            height: size
          }}
          className={classnames(this.css.image, this.css[shape])}
          alt="" />
        {profileType &&
          <div className={classnames(this.css.profile, this.css[profileType])}>
            <ProfileIcon color="white" className={this.css.icon} />
          </div>
        }
      </div>
    )
  }

}
