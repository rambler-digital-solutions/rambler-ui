import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function AppleIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M16.677 6.138c-.104.08-1.947 1.106-1.947 3.42 0 2.672 2.338 3.617 2.407 3.64-.011.069-.368 1.29-1.232 2.556-.76 1.106-1.578 2.223-2.798 2.223-1.221 0-1.544-.726-2.949-.726-1.382 0-1.865.749-2.982.749-1.117 0-1.9-1.036-2.799-2.292C3.341 14.223 2.5 11.931 2.5 9.743c0-3.49 2.269-5.355 4.514-5.355 1.187 0 2.177.783 2.926.783.702 0 1.808-.83 3.167-.83.518 0 2.36.047 3.57 1.797zM13.383 0c.023.104.034.23.034.357 0 .921-.391 1.843-.944 2.51-.599.738-1.624 1.279-2.441 1.279-.092 0-.185-.012-.242-.023a1.58 1.58 0 01-.035-.323c0-.932.472-1.854.99-2.441.646-.76 1.74-1.324 2.638-1.359z"
        fillRule="nonzero"
      />
    </SvgIcon>
  )
}

AppleIcon.displayName = 'AppleIcon'

AppleIcon.defaultProps = {
  color: '#000'
}