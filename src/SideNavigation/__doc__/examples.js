import { SideNavigation, SideNavigationItem } from 'rambler-ui/SideNavigation'
import React, { Component } from 'react'
import { BookIcon, EmailIcon, PhoneIcon, CreditCardIcon } from 'rambler-ui/icons/forms'
import { ApplyTheme } from 'rambler-ui/theme'

export default class SideNavigationExample extends Component {

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
          <SideNavigation value={this.state.value} onChange={::this.onChange}>
            <SideNavigationItem value="general" icon={<BookIcon />}>Личные данные</SideNavigationItem>
            <SideNavigationItem value="email" icon={<EmailIcon />}>Адреса электронной почты</SideNavigationItem>
            <SideNavigationItem value="phone" icon={<PhoneIcon />}>Телефонные номера</SideNavigationItem>
            <SideNavigationItem value="cards" icon={<CreditCardIcon />}>Платежные средства</SideNavigationItem>
            <SideNavigationItem value="social">Социальные аккаунты</SideNavigationItem>
          </SideNavigation>
          <br/>
          <div>this.state.value: <b>{this.state.value}</b></div>
        </div>
      </ApplyTheme>
    )

  }

}
