import React, {Component} from 'react'
import {SideNav, SideNavItem} from 'rambler-ui/SideNav'
import {
  BookIcon,
  EmailIcon,
  PhoneIcon,
  CreditCardIcon,
  WizardIcon
} from 'rambler-ui/icons/forms'

export default class SideNavExample extends Component {
  state = {
    value: 'general'
  }

  onChange = (event, newValue) => {
    this.setState({value: newValue})
  }

  render() {
    return (
      <div>
        <div
          style={{width: '300px', marginBottom: 40, display: 'inline-block'}}>
          <SideNav value={this.state.value} onChange={this.onChange}>
            <SideNavItem value="general" icon={<BookIcon />}>
              Личные данные
            </SideNavItem>
            <SideNavItem value="email" icon={<EmailIcon />}>
              Адреса электронной почты
            </SideNavItem>
            <SideNavItem value="phone" icon={<PhoneIcon />}>
              Телефонные номера
            </SideNavItem>
            <SideNavItem value="cards" icon={<CreditCardIcon />}>
              Платежные средства
            </SideNavItem>
            <SideNavItem value="social" icon={<WizardIcon />}>
              Социальные аккаунты
            </SideNavItem>
          </SideNav>
        </div>
        <div
          style={{width: '300px', marginBottom: 40, display: 'inline-block'}}>
          <SideNav
            size="small"
            value={this.state.value}
            onChange={this.onChange}>
            <SideNavItem value="general" icon={<BookIcon />}>
              Личные данные
            </SideNavItem>
            <SideNavItem value="email" icon={<EmailIcon />}>
              Адреса электронной почты
            </SideNavItem>
            <SideNavItem value="phone" icon={<PhoneIcon />}>
              Телефонные номера
            </SideNavItem>
            <SideNavItem value="cards" icon={<CreditCardIcon />}>
              Платежные средства
            </SideNavItem>
            <SideNavItem value="social" icon={<WizardIcon />}>
              Социальные аккаунты
            </SideNavItem>
          </SideNav>
        </div>
        <div>
          this.state.value: <b>{this.state.value}</b>
        </div>
      </div>
    )
  }
}
