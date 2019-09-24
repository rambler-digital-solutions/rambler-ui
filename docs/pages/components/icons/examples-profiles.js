import React from 'react'
import Tooltip from 'rambler-ui/Tooltip'
import * as icons from 'rambler-ui/icons/profiles'

const styles = {
  display: 'inline-block',
  margin: 10
}

export default () => (
  <div>
    {Object.keys(icons).map(iconName => {
      const Icon = icons[iconName]
      return (
        <div key={iconName} style={styles}>
          <Tooltip content={`<${iconName} />`}>
            <Icon />
          </Tooltip>
        </div>
      )
    })}
    {Object.keys(icons).map(iconName => {
      const Icon = icons[iconName]
      return (
        <div
          key={iconName}
          style={{
            ...styles,
            borderRadius: '50%',
            backgroundColor: '#f5f7f8',
            lineHeight: 0
          }}>
          <Tooltip content={`<${iconName} />`}>
            <Icon
              size={12}
              color="rgba(0, 0, 0, 0.247059)"
              style={{margin: 4}}
            />
          </Tooltip>
        </div>
      )
    })}
  </div>
)
