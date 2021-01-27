import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function EditIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 0v15V0zm15 15V0v15zm-3.96-7.737L7.737 3.96 1.2 10.497V13.8h3.303l6.537-6.537zM6.2 13.8h6.3c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5H1c-.552 0-1-.448-1-1v-3.586c0-.265.105-.519.293-.707l7.091-7.091c.195-.195.512-.195.707 0l4.293 4.293c.195.195.195.512 0 .707L6.2 13.8zm7.739-7.739l-.141.141c-.195.195-.512.195-.707 0L8.798 1.909c-.195-.195-.195-.512 0-.707l.141-.141c.196-.196.512-.196.707 0l4.293 4.293c.196.195.196.511 0 .707z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

EditIcon.displayName = 'EditIcon'
