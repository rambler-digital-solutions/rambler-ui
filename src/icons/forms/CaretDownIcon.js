import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function CaretDownIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M15 0v15M0 15V0m5.061 4.646L7.5 7.086l2.439-2.44c.196-.195.512-.195.707 0l.708.708c.195.195.195.511 0 .707l-3.5 3.5c-.196.195-.512.195-.708 0l-3.5-3.5c-.195-.196-.195-.512 0-.707l.708-.708c.195-.195.511-.195.707 0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 20V0m7.061 7.646L10 10.586l2.939-2.94c.196-.195.512-.195.707 0l.708.708c.195.195.195.511 0 .707l-4 4c-.196.195-.512.195-.708 0l-4-4c-.195-.196-.195-.512 0-.707l.708-.708c.195-.195.511-.195.707 0"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

CaretDownIcon.displayName = 'CaretDownIcon'
