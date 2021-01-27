import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LayoutFullIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-2.4 3.9H2.4c-.221 0-.4.179-.4.4v.4c0 .221.179.4.4.4h3.5v1.8H2.4c-.221 0-.4.179-.4.4v.4c0 .221.179.4.4.4h3.5v1.8H2.4c-.221 0-.4.179-.4.4v.4c0 .221.179.4.4.4h3.5v.5c0 .221.179.4.4.4h.4c.221 0 .4-.179.4-.4V5.1h5.5c.221 0 .4-.179.4-.4v-.4c0-.221-.179-.4-.4-.4zM1 1c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H1zm.2 11.8h12.6V2.2H1.2v10.6z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LayoutFullIcon.displayName = 'LayoutFullIcon'
