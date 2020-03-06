import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, MenuItem} from 'rambler-ui/Menu'

export default function MenuRouterExample() {
  return (
    <div>
      <Menu>
        <MenuItem container={<Link to="/home" />}>Кнопка-ссылка</MenuItem>
        <MenuItem
          container={({activeClassName}) => (
            <Link to="/home" activeClassName={activeClassName} />
          )}>
          Кнопка-ссылка
        </MenuItem>
      </Menu>
    </div>
  )
}
