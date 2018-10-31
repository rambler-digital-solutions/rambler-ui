import React from 'react'
import SvgIcon from '../SvgIcon'

export default function RefreshIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 15">
      <path d="M12.57 11.57A6.5 6.5 0 0 1 1.02 8h1.203a5.3 5.3 0 0 0 9.491 2.714l-1.359-1.359C10.152 9.152 10.22 9 10.49 9h3.02c.275 0 .49.22.49.49v3.02c0 .275-.159.331-.355.135l-1.076-1.076zM2.43 3.43A6.5 6.5 0 0 1 13.98 7h-1.203a5.3 5.3 0 0 0-9.491-2.714l1.359 1.359c.203.203.135.355-.135.355H1.49A.488.488 0 0 1 1 5.51V2.49c0-.275.159-.331.355-.135l1.076 1.076z" />
    </SvgIcon>
  )
}

RefreshIcon.displayName = 'RefreshIcon'
