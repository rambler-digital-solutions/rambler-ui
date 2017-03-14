import { Link } from 'react-router'
import { SideNav, SideNavItem } from 'rambler-ui/SideNav'

export default () => (
  <div>
    <SideNav>
      <SideNavItem container={ <Link to="/general" /> }>Личные данные</SideNavItem>
      <SideNavItem container={ <Link to="/email" /> }>Адреса электронной почты</SideNavItem>
      <SideNavItem container={ <Link to="/phone" /> }>Телефонные номера</SideNavItem>
    </SideNav>
  </div>
)
