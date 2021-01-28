import React from 'react'
import Tooltip from 'rambler-ui/Tooltip'
import * as icons from 'rambler-ui/icons/forms'

const styles = {
  display: 'inline-block',
  margin: 10
}

const aliases = Object.keys(icons).reduce(
  (acc, iconName) =>
    icons[iconName].alias ? [...acc, ...icons[iconName].alias] : acc,
  []
)

export default function FormIconsExamples() {
  return (
    <div>
      {Object.keys(icons)
        .filter(iconName => aliases.indexOf(iconName) === -1)
        .map(iconName => {
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
