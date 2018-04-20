import css from './index.css'
import * as icons from '../index'
import Tooltip from '../../../Tooltip'
import { ApplyTheme } from '../../../theme'

export const title = 'Service icons'
export default function Doc() {

  return (
    <ApplyTheme>
      <div>
        {
          Object.keys(icons).map((iconName, i) => {
            const Icon = icons[iconName]
            
            return (
              <div key={ i } className={ css.Icon }>
                <Tooltip content={ `<${iconName} />` }><Icon /></Tooltip>
              </div>
            )
          })
        }
      </div>
    </ApplyTheme>
  )

}
