import css from './index.css'
import * as icons from '../index'

export const title = 'Иконки сервисов'
export default function Doc() {

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {
          Object.keys(icons).map((iconName, i) => {
            const Icon = icons[iconName]
            return (
              <div key={ i } className={ css.Icon }><Icon/></div>
            )
          })
        }
      </div>
    </div>
  )

}
