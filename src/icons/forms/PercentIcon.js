import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PercentIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M12 12.8c-.992 0-1.8-.807-1.8-1.8s.808-1.8 1.8-1.8 1.8.807 1.8 1.8-.808 1.8-1.8 1.8M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3M4 5.8c-.992 0-1.8-.807-1.8-1.8S3.008 2.2 4 2.2s1.8.807 1.8 1.8S4.992 5.8 4 5.8M4 1C2.343 1 1 2.343 1 4s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-.68 11.74l8.4-11.2c.165-.221.479-.266.699-.1l.161.12c.221.166.266.479.1.7l-8.4 11.2c-.165.221-.479.266-.699.1l-.161-.12c-.221-.166-.266-.479-.1-.7M15 15V0M0 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PercentIcon.displayName = 'PercentIcon'
