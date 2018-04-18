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
            const props = {}
            if (iconName.match(/Big$/) !== null) 
              props.size = 80
            
            return (
              <div key={ i } className={ css.Icon }>
                <Tooltip content={ `<${iconName} />` }><Icon {...props} /></Tooltip>
              </div>
            )
          })
        }
      </div>
    </ApplyTheme>
  )

}
