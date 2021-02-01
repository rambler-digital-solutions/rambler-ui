import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GuideIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15M1.481 12.013c2.055.108 3.923.91 5.385 2.171.363.313.905.313 1.268 0 1.462-1.261 3.33-2.063 5.385-2.171.268-.014.481-.225.481-.493V5.521c0-.284-.239-.522-.523-.506C11.129 5.15 9.026 6.19 7.5 7.786 5.974 6.19 3.871 5.15 1.523 5.015 1.239 4.999 1 5.237 1 5.521v5.999c0 .268.213.479.481.493M7.5 1c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2M0 15V0m15 0v15"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20m3.482-4.989c2.241.107 4.287.953 5.904 2.298.353.294.875.294 1.228 0 1.617-1.345 3.663-2.191 5.904-2.298.268-.012.482-.223.482-.491v-7c0-.284-.238-.521-.522-.507-2.519.13-4.79 1.195-6.478 2.851-1.688-1.656-3.959-2.721-6.478-2.851C3.238 6.999 3 7.236 3 7.52v7c0 .268.214.479.482.491M12 5c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

GuideIcon.displayName = 'GuideIcon'
