import { SideNavigation, SideNavigationItem } from 'rambler-ui/SideNavigation'

export default () => (
  <div>
    <SideNavigation>
      <SideNavigationItem href="/#general">Личные данные</SideNavigationItem>
      <SideNavigationItem href="/#email">Адреса электронной почты</SideNavigationItem>
      <SideNavigationItem href="/#phone">Телефонные номера</SideNavigationItem>
    </SideNavigation>
  </div>
)
