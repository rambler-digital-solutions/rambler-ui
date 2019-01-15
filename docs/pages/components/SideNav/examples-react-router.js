import React from 'react'
import {Link} from 'react-router'
import {SideNav, SideNavItem} from 'rambler-ui/SideNav'
import {BookIcon, EmailIcon, PhoneIcon} from 'rambler-ui/icons/forms'

export default () => (
  <div>
    <SideNav>
      <SideNavItem container={<Link to="/general" />} icon={<BookIcon />}>
        Личные данные
      </SideNavItem>
      <SideNavItem container={<Link to="/email" />} icon={<EmailIcon />}>
        Адреса электронной почты
      </SideNavItem>
      <SideNavItem
        container={({activeClassName}) => (
          <Link to="/phone" activeClassName={activeClassName} />
        )}
        icon={<PhoneIcon />}>
        Телефонные номера
      </SideNavItem>
    </SideNav>
  </div>
)
