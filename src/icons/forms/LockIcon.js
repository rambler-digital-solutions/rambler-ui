import React, { PureComponent } from 'react'
import SvgIcon from '../SvgIcon'

export default class LockIcon extends PureComponent {

  static displayName = 'LockIcon'

  render() {
    return (
      <SvgIcon { ...this.props } viewBox="0 0 11 15">
        <path d="M9.625 5h-.688V3.571C8.938 1.6 7.397 0 5.5 0 3.603 0 2.062 1.6 2.062 3.571V5h-.687C.619 5 0 5.643 0 6.429v7.142C0 14.357.619 15 1.375 15h8.25c.756 0 1.375-.643 1.375-1.429V6.43C11 5.643 10.381 5 9.625 5zM5.5 11.429c-.756 0-1.375-.643-1.375-1.429S4.744 8.571 5.5 8.571 6.875 9.214 6.875 10s-.619 1.429-1.375 1.429zM7.631 5H3.37V3.571c0-1.221.955-2.214 2.131-2.214 1.176 0 2.131.993 2.131 2.214V5z" fillRule="evenodd" />
      </SvgIcon>
    )
  }

}
