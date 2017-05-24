import React from 'react'
import Avatar from 'rambler-ui/Avatar'
import { ApplyTheme } from 'rambler-ui/theme'

export default function AvatarExample() {
  const props = {
    style: {
      marginLeft: 10
    },
    src: './static/unicorn.jpeg'
  }

  return (
    <div>

      <ApplyTheme>
        <div>
          <div style={{ display: 'inline-block', width: '33%' }}>
            Circle
            <Avatar {...props} profileType="facebook" />
            <Avatar {...props} size={20} />
            <Avatar {...props} size={60} />
          </div>

          <div style={{ display: 'inline-block', width: '33%' }}>
            Rounded
            <Avatar {...props} shape="rounded" />
            <Avatar {...props} shape="rounded" size={20} />
            <Avatar {...props} shape="rounded" size={60} profileType="instagram" />
          </div>

          <div style={{ display: 'inline-block', width: '33%' }}>
            Square
            <Avatar {...props} shape="square" profileType="livejournal" />
            <Avatar {...props} shape="square" size={20} />
            <Avatar {...props} shape="square" size={60} />
          </div>
        </div>
      </ApplyTheme>

    </div>
  )
}
