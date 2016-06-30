import { map } from 'lodash'
import css from './index.css'

const reqChildContext = require.context('..', true, /^[^\/]+\.js$/)

export const title = 'Иконки сервисов'
export const menuTitle = 'Иконки сервисов'

export default function Doc() {

  // Обрабатываем ES6-модули
  const icons = map(
    requireAll(reqChildContext),
    'default'
  )

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {
          icons.map((Icon) => (
            <div className={css.Icon}><Icon /></div>
          ))
        }
      </div>
    </div>
  )

}

