import { SideNav, SideNavItem } from 'rambler-ui/SideNav'
import React, { Component } from 'react'
import { BookIcon, EmailIcon, PhoneIcon, CreditCardIcon } from 'rambler-ui/icons/forms'
import { ApplyTheme } from 'rambler-ui/theme'

export default class SideNavExample extends Component {

  state = {
    value: 'general'
  };

  onChange(event, newValue) {
    this.setState({ value: newValue })
  }

  render() {

    return (
      <ApplyTheme>
        <div>
          <SideNav value={this.state.value} onChange={::this.onChange}>
            <SideNavItem value="general" icon={<BookIcon />}>Личные данные</SideNavItem>
            <SideNavItem value="email" icon={<EmailIcon />}>Адреса электронной почты</SideNavItem>
            <SideNavItem value="phone" icon={<PhoneIcon />}>Телефонные номера</SideNavItem>
            <SideNavItem value="cards" icon={<CreditCardIcon />}>Платежные средства</SideNavItem>
            <SideNavItem value="social">Социальные аккаунты</SideNavItem>
          </SideNav>
          <br/>
          <div>this.state.value: <b>{this.state.value}</b></div>
        </div>
      </ApplyTheme>
    )

  }

}
