import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function RedoIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M1.008 7.182c-.169 3.551 2.512 6.513 5.952 6.796.291.024.54-.207.54-.499v-.201c0-.258-.197-.475-.455-.497-2.844-.243-5.054-2.741-4.829-5.694.198-2.603 2.311-4.694 4.916-4.874 1.869-.129 3.527.732 4.56 2.096l-1.265 1.265c-.157.157-.046.426.177.426H13.5c.277 0 .5-.223.5-.5V2.604c0-.223-.269-.334-.426-.177l-1.008 1.008C11.307 1.868 9.341.894 7.149 1.01c-3.31.175-5.983 2.861-6.141 6.172M15 0v15M0 15V0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 20V0M4.625 8.815c-.711 3.381 1.709 6.39 4.898 6.665.266.022.477.23.477.497v.5c0 .285-.239.525-.524.504C5.855 16.713 3 13.69 3 10c0-3.866 3.134-7 7-7 2.301 0 4.326 1.123 5.6 2.839V3.5c0-.276.224-.5.5-.5h.4c.276 0 .5.224.5.5v4c0 .276-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5v-.4c0-.276.224-.5.5-.5h1.806c-1.208-1.528-3.196-2.41-5.367-1.999-2.128.402-3.869 2.095-4.314 4.214"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

RedoIcon.displayName = 'RedoIcon'
