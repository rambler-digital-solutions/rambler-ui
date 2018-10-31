import React from 'react'
import SvgIcon from '../SvgIcon'

export default function PgumosruIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.03 3.03h11.941v12.626a.533.533 0 0 1-.533.533H13.9c-1.479 0-2.756.244-4.183 1.805l-.006-1.805H4.563a.533.533 0 0 1-.532-.533V3.03zM3 15.655c0 .861.701 1.562 1.563 1.562H8.85v2.89l.947-.998c1.35-1.397 2.424-1.892 4.103-1.892h1.538c.863 0 1.564-.7 1.564-1.562V2H3v13.656z"
      />
    </SvgIcon>
  )
}

PgumosruIcon.displayName = 'PgumosruIcon'

PgumosruIcon.defaultProps = {
  color: '#c92723'
}
