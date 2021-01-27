import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function AuthenticatorIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-3.2 1.2v12.6H3.2V1.2l2.31-.001c-.006.033-.01.066-.01.101v.2c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-.2c0-.035-.004-.068-.01-.101l2.31.001zM13 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm-3 5.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2.5 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zM5 6.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

AuthenticatorIcon.displayName = 'AuthenticatorIcon'
