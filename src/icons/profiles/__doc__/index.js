import css from './index.css'
import * as icons from '../index'

export const title = 'Profile icons'
export default function Doc() {

  return (
    <div>
      {
        Object.keys(icons).map((iconName, i) => {
          const Icon = icons[iconName]
          return (
            <div key={ i } className={ css.Icon } title={ `<${iconName} />` }><Icon/></div>
          )
        })
      }
    </div>
  )

}
