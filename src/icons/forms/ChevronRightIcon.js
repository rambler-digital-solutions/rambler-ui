import React, {PureComponent} from 'react'
import SvgIcon from '../SvgIcon'

export default class ChevronRightIcon extends PureComponent {
  static displayName = 'ChevronRightIcon'

  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 10 10">
        <path d="M2.698 2.141a.203.203 0 0 1-.007-.283l.713-.714c.076-.076.207-.069.28.004l3.564 3.566a.41.41 0 0 1 0 .574L3.684 8.854a.2.2 0 0 1-.28.004l-.713-.714c-.076-.076-.075-.2.007-.283l2.858-2.86-2.858-2.86z" />
      </SvgIcon>
    )
  }
}
