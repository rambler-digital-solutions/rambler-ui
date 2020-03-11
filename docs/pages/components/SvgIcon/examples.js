import React from 'react'
import SvgIcon from 'rambler-ui/SvgIcon'

const icons = [
  {},
  {size: 'small', color: 'red'},
  {size: 'large', color: 'blue'}
]

export default function SvgIconExample() {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {icons.map((props, i) => (
        <div key={i} style={{margin: 10}}>
          <SvgIcon viewBox="0 0 15 15" {...props}>
            <path d="M7.5 8.8a1.3 1.3 0 0 1-.919-.381l1.838-1.838A1.3 1.3 0 0 1 7.5 8.8m0-3.8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0-1.8c-2.228 0-4.379 1.521-6.106 4.3 1.727 2.779 3.878 4.3 6.106 4.3 2.228 0 4.379-1.521 6.106-4.3C11.879 4.721 9.728 3.2 7.5 3.2m0 9.8C4.916 13 2.331 11.338.302 8.015a.993.993 0 0 1 0-1.03C2.331 3.662 4.916 2 7.5 2c2.584 0 5.169 1.662 7.198 4.985a.993.993 0 0 1 0 1.03C12.669 11.338 10.084 13 7.5 13M0 0v15m15 0V0" />
          </SvgIcon>
        </div>
      ))}
    </div>
  )
}
