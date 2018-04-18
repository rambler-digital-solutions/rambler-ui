import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerBrowserIcon extends PureComponent {

  static displayName = 'RamblerBrowserIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M46.414 55.229l-6.163-14.222a3.996 3.996 0 0 0-2.08-2.08l-14.413-6.245L60.7 17.996 46.414 55.229zm17.74-43.987L16.316 30.259c-2.068.822-2.112 3.732-.07 4.617l17.27 7.482L9.84 66.037a1.5 1.5 0 0 0 0 2.12l1.414 1.415a1.5 1.5 0 0 0 2.121 0L36.96 45.986l7.302 16.85c.89 2.055 3.825 1.992 4.628-.1l18.522-48.275c.78-2.034-1.233-4.024-3.258-3.22z"/>
      </SvgIcon>
    )
  }
}
