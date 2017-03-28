import {Component} from 'react'
// import { unstable_renderSubtreeIntoContainer } from 'react-dom'
// import { findOverflowedParent, getScroll } from '../utils/scroll'

/**
 * Оверлей, который добавляется к body
 * Есть возможность прицепить оверлей, как fixed, так и absolute
 * При скролле body, documentElement или window, ресайзе window, перестраивается позиция элемента
 */
export default class FixedOverlay extends Component {

  /**
   * Показать оверлей
   */
  show() {

  }

  /**
   * Скрыть оверлей
   */
  hide() {

  }

  /**
   *
   */
  componentWillMount() {

  }

  componentDidMount() {

  }

  /**
   *
   */
  render() {
    return this.props.children
  }

}
