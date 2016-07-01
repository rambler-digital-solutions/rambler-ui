import { map } from 'lodash'
import css from './index.css'
import * as icons from '../index'

export const title = 'Иконки сервисов'
export default function Doc() {

  return (
    <div>
      <h2>{title}</h2>
      <div>
        { icons.map(Icon => <div className={css.Icon}><Icon/></div>) }
      </div>
    </div>
  )

}

