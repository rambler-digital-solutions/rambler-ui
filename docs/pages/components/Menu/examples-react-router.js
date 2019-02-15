import {Menu, MenuItem} from 'rambler-ui/Tabs'
import {Link} from 'react-router'

export default () => (
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
