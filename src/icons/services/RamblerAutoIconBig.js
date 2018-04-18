import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class RamblerAutoIconBig extends PureComponent {

  static displayName = 'RamblerAutoIconBig'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 80 80">
        <path fillRule="evenodd" d="M42.472 67.882V56.615h10.652a4 4 0 0 0 3.962-3.443L58.588 42.5h9.292c-1.197 13.455-11.948 24.198-25.407 25.382zM12.12 42.5h9.194l1.56 10.691a4 4 0 0 0 3.957 3.424h10.641v11.263C24.04 66.669 13.315 55.937 12.12 42.5zm15.577 9.115l-2.76-18.941h29.982l-2.663 18.941h-24.56zm12.302-39.613c14.596 0 26.611 11.227 27.881 25.498h-8.59l.742-5.269a4 4 0 0 0-3.961-4.557H23.78a4 4 0 0 0-3.959 4.577l.765 5.249H12.12C13.39 23.229 25.405 12.002 40 12.002zm0-5C21.775 7.002 7.002 21.776 7.002 40c0 18.224 14.774 32.998 32.997 32.998 18.225 0 32.998-14.774 32.998-32.998C72.998 21.776 58.225 7.002 40 7.002z"/>
      </SvgIcon>
    )
  }
}
