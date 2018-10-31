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
            backgroundColor: '#444',
            lineHeight: 0
          }}>
          <Tooltip content={`<${iconName} />`}>
            <Icon size={12} color="white" style={{margin: 4}} />
          </Tooltip>
        </div>
      )
    })}
  </div>
)
