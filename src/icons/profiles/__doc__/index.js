import css from './index.css'
import * as icons from '../index'

export const title = 'Profile icons'

export default function Doc() {

  return (
    <div>
      <div>
        {Object.keys(icons).map((iconName, i) => {
          const Icon = icons[iconName]
          return (
            <div key={ i } className={ css.Icon } title={ `<${iconName} />` }><Icon/></div>
          )
        })}
      </div>
      <div style={{ marginTop: 15 }}>
        {Object.keys(icons).map((iconName, i) => {
          const Icon = icons[iconName]
          return (
            <div key={ i } className={ css.CircleIcon } title={ `<${iconName} />` }>
              <Icon size={12} color="white" />
            </div>
          )
        })}
      </div>
    </div>
  )

}
