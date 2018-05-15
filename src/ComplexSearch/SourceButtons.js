import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import GlobalSearchIcon from '../icons/forms/GlobalSearchIcon'
import ServiceSearchIcon from '../icons/forms/ServiceSearchIcon'

@injectSheet(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  active: {},
  icon: {
    opacity: 0.5,
    transition: 'opacity 0.2s, color 0.2s',
    color: theme.search.serviceIcon.color,
    cursor: 'pointer',
    marginRight: 10,

    '&:last-child': {
      marginRight: 0
    },

    '&:hover': {
      opacity: 1,
      color: theme.search.serviceIcon.hover.color
    },
      
    '&$active': {
      opacity: 1
    }
  }
}), {name: 'SourceButtons'})
export default class SourceButtons extends React.Component {
  static propTypes = {
    /**
     * Переопределение стандартных стилей компонента SourceButtons
     */
    style: PropTypes.object,
    /**
     * CSS-класс компонента
     */
    className: PropTypes.string,
    /**
     * 	Дополнительные аттрибуты для кнопок переключения источника поиска
     */
    sourceButtonsProps: PropTypes.func,
    /**
     * 	Коллбек клика по иконке
     */
    onSourceIconClick: PropTypes.func,
    /**
     * 	Тип активной иконки
     */
    activeType: PropTypes.string
  };

  static defaultProps = {
    className: '',
    sourceButtonsProps: () => ({})
  };

  render() {
    const {classes, sourceButtonsProps, className, activeType, onSourceIconClick} = this.props
    return (
      <div className={classnames(classes.root, className)}>
        <GlobalSearchIcon
          onClick={() => onSourceIconClick('global')}
          className={classnames(classes.icon, {
            [classes.active]: activeType === 'global'
          })}
          color="currentColor"
          {...sourceButtonsProps('global')}
        />
        <ServiceSearchIcon
          onClick={() => onSourceIconClick('service')}
          color="currentColor"
          className={classnames(classes.icon, {
            [classes.active]: activeType === 'service'
          })}
          {...sourceButtonsProps('service')}
        />
      </div>
    )
  }
}
