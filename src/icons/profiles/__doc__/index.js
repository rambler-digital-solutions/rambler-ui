import css from './index.css'
import * as icons from '../index'
import Tooltip from '../../../Tooltip'
import { ApplyTheme } from '../../../theme'

export const title = 'Profile icons'

export default function Doc() {

  return (
    <ApplyTheme>
      <div>
        <div>
          {Object.keys(icons).map((iconName, i) => {
            const Icon = icons[iconName]
            return (
              <div key={ i } className={ css.Icon }>
                <Tooltip content={ `<${iconName} />` }><Icon/></Tooltip>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 15 }}>
          {Object.keys(icons).map((iconName, i) => {
            const Icon = icons[iconName]
            return (
              <div key={ i } className={ css.CircleIcon }>
                <Tooltip content={ `<${iconName} />` }><Icon size={12} color="white" /></Tooltip>
              </div>
            )
          })}
        </div>
      </div>
    </ApplyTheme>
  )

}
