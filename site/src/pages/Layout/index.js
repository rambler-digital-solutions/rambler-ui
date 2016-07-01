import { Component } from 'react'
import css from './index.css'

export default class Layout extends Component {

  render() {
    return <div className={css.Layout}>
      { this.props.children }
    </div>
  }

}
