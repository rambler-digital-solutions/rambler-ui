import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function LoginIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M14 15H4c-.552 0-1-.448-1-1v-4h1.2v3.8h9.6V1.2H4.2V5H3V1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1M1.5 6.9h6.552L6.429 5.278c-.195-.196-.195-.512.001-.708l.141-.141c.195-.195.511-.195.707 0l2.717 2.717c.195.196.195.512 0 .708l-2.717 2.717c-.196.195-.512.195-.707 0l-.141-.141c-.196-.196-.196-.512-.001-.708L8.052 8.1H1.5c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5M0 0v15m15 0V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

LoginIcon.displayName = 'LoginIcon'
