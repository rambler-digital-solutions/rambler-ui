import { Link } from 'react-router'
import { SideNavigation, SideNavigationItem } from 'rambler-ui/SideNavigation'

export default () => (
  <div>
    <SideNavigation>
      <SideNavigationItem container={ <Link to="/general" /> }>Личные данные</SideNavigationItem>
      <SideNavigationItem container={ <Link to="/email" /> }>Адреса электронной почты</SideNavigationItem>
      <SideNavigationItem container={ <Link to="/phone" /> }>Телефонные номера</SideNavigationItem>
    </SideNavigation>
  </div>
)
