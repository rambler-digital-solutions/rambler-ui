import React from 'react'
import SvgIcon from '../SvgIcon'

export default function SberbankIcon(props) {
  const {color} = props
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M0,10 C0,4.4771525 4.47593818,0 10,0 C15.5228475,0 20,4.47593818 20,10 C20,15.5228475 15.5240618,20 10,20 C4.4771525,20 0,15.5240618 0,10 Z M5.759,6.609 L7.763,7.709 L12.246,5.248 C12.476,5.341 12.696,5.448 12.909,5.568 L7.763,8.405 L5.358,7.082 C5.483,6.917 5.616,6.759 5.758,6.609 L5.759,6.609 Z M5.042,7.55 L7.763,9.043 L13.453,5.918 C13.631,6.047 13.8,6.185 13.96,6.332 L7.763,9.733 L4.76,8.086 C4.844,7.902 4.938,7.724 5.042,7.551 L5.042,7.55 Z M4.542,8.642 L7.763,10.409 L14.39,6.772 C14.526,6.927 14.652,7.089 14.77,7.258 L7.762,11.099 L4.386,9.246 L4.542,8.642 Z M4.3,9.89 L7.764,11.794 L15.081,7.764 C15.487,8.512 15.716,9.362 15.716,10.262 C15.716,13.274 13.157,15.715 10.001,15.715 C6.844,15.715 4.286,13.274 4.286,10.262 C4.286,10.137 4.29,10.013 4.299,9.89 L4.3,9.89 Z"
        fill={color || '#22A330'}
        fillRule="evenodd"
      />
      {!color && (
        <path
          d="M5.759,6.609 L7.763,7.709 L12.246,5.248 C12.476,5.341 12.696,5.448 12.909,5.568 L7.763,8.405 L5.358,7.082 C5.483,6.917 5.616,6.759 5.758,6.609 L5.759,6.609 Z M5.042,7.55 L7.763,9.043 L13.453,5.918 C13.631,6.047 13.8,6.185 13.96,6.332 L7.763,9.733 L4.76,8.086 C4.844,7.902 4.938,7.724 5.042,7.551 L5.042,7.55 Z M4.542,8.642 L7.763,10.409 L14.39,6.772 C14.526,6.927 14.652,7.089 14.77,7.258 L7.762,11.099 L4.386,9.246 L4.542,8.642 Z M4.3,9.89 L7.764,11.794 L15.081,7.764 C15.487,8.512 15.716,9.362 15.716,10.262 C15.716,13.274 13.157,15.715 10.001,15.715 C6.844,15.715 4.286,13.274 4.286,10.262 C4.286,10.137 4.29,10.013 4.299,9.89 L4.3,9.89 Z"
          fill="#fff"
        />
      )}
    </SvgIcon>
  )
}

SberbankIcon.displayName = 'SberbankIcon'

SberbankIcon.defaultProps = {
  color: null
}
