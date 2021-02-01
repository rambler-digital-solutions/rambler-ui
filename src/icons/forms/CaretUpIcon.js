import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function CaretUpIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15M9.939 9.354L7.5 6.914l-2.439 2.44c-.196.195-.512.195-.707 0l-.708-.708c-.195-.195-.195-.511 0-.707l3.5-3.5c.196-.195.512-.195.708 0l3.5 3.5c.195.196.195.512 0 .707l-.708.708c-.195.195-.511.195-.707 0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-7.061-7.646L10 9.414l-2.939 2.94c-.196.195-.512.195-.707 0l-.708-.708c-.195-.195-.195-.511 0-.707l4-4c.196-.195.512-.195.708 0l4 4c.195.196.195.512 0 .707l-.708.708c-.195.195-.511.195-.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

CaretUpIcon.displayName = 'CaretUpIcon'
