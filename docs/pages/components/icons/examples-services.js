import React from 'react'
import Tooltip from 'rambler-ui/Tooltip'
import * as icons from 'rambler-ui/icons/services'

const styles = {
  display: 'inline-block',
  margin: 10
}

export default function ServiceIconsExamples() {
  return (
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
    </div>
  )
}
