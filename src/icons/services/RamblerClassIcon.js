import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RamblerClassIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M10 9.557L4.707 7.284l5.261-2.357L15.28 7.29 10 9.557zm7.981-2.708l-7.71-3.429a.752.752 0 0 0-.611.001L2.014 6.848a.5.5 0 0 0 .007.916l7.683 3.298a.743.743 0 0 0 .592 0l4.598-1.974v5.256c-.939.358-2.674.873-4.895.873-2.023 0-3.832-.533-4.839-.902V9.111l-1.5-.643v6.362c0 .302.177.575.456.691.94.386 3.225 1.196 5.883 1.196 2.921 0 5.076-.797 5.957-1.187a.743.743 0 0 0 .438-.682V8.444l1.582-.678a.5.5 0 0 0 .005-.917z"
      />
    </SvgIcon>
  )
}

RamblerClassIcon.displayName = 'RamblerClassIcon'
