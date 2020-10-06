import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../../SvgIcon'

export default function SberbankIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path d="M10,9.75,17.12,4.5A8.67,8.67,0,0,1,18.05,6l.15.32-8.2,6L6.57,10.18V7.6Zm6.92.07V10a6.93,6.93,0,1,1-3-5.71L15.65,3l-.22-.18A9,9,0,1,0,19,10a9.45,9.45,0,0,0-.14-1.61ZM0,20V0M20,20V0" />
    </SvgIcon>
  )
}

SberbankIcon.displayName = 'SberbankIcon'

SberbankIcon.defaultProps = {
  color: '#22A330'
}

SberbankIcon.propTypes = {
  color: PropTypes.string
}
