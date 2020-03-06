import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from 'rambler-ui/icons/SvgIcon'

export default function ArrowIcon({color, ...props}) {
  return (
    <SvgIcon
      {...props}
      color={color || 'currentColor'}
      style={{marginLeft: 5}}
      size={15}
      viewBox="0 0 15 3">
      <path d="M12,1 L12,0 L15,1.5 L12,3 L12,2 L0,2 L0,1 L12,1 Z" />
    </SvgIcon>
  )
}

ArrowIcon.propTypes = {
  color: PropTypes.string
}
