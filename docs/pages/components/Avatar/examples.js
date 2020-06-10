import React from 'react'
import Avatar from 'rambler-ui/Avatar'

export default function AvatarExample() {
  const props = {
    style: {
      marginRight: 10,
      marginBottom: 10
    },
    src: '//api.adorable.io/avatars/face/eyes4/nose5/mouth7/8e8895/'
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10
      }}>
      <div style={{marginRight: 20}}>
        <h4>shape: circle</h4>
        <Avatar {...props} profileType="facebook" />
        <Avatar {...props} size={36} profileType="facebook" />
        <Avatar
          {...props}
          size={75}
          container={<a href="#/components/Button" />}
        />
      </div>

      <div style={{marginRight: 20}}>
        <h4>shape: rounded</h4>
        <Avatar {...props} shape="rounded" profileType="facebook" />
        <Avatar {...props} shape="rounded" size={25} profileType="facebook" />
        <Avatar
          {...props}
          shape="rounded"
          size={75}
          profileType="instagram"
          iconBackgroundColor="#f3f4f7"
          container={<a href="#/components/Button" />}
        />
      </div>

      <div>
        <h4>shape: square</h4>
        <Avatar {...props} shape="square" profileType="livejournal" />
        <Avatar {...props} shape="square" size={25} />
        <Avatar {...props} shape="square" size={75} />
      </div>
    </div>
  )
}
