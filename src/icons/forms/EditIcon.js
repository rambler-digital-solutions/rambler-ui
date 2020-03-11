import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EditIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M6.2 13.8h6.4c.22 0 .4.18.4.4v.4a.4.4 0 0 1-.4.4H.8a.8.8 0 0 1-.8-.8v-3.869a.8.8 0 0 1 .234-.565l6.983-6.983a.4.4 0 0 1 .566 0l4.434 4.434a.4.4 0 0 1 0 .566L6.2 13.8zm-5-3.303V13.8h3.303l6.3-6.3L7.5 4.197l-6.3 6.3zM13.941 6.06l-.282.282a.4.4 0 0 1-.566 0L8.659 1.907a.4.4 0 0 1 0-.566l.282-.282a.4.4 0 0 1 .566 0l4.434 4.434a.4.4 0 0 1 0 .566z" />
    </SvgIcon>
  )
}

EditIcon.displayName = 'EditIcon'
