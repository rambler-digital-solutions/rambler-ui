import React, {Component} from 'react'
import {SideNav, SideNavItem} from 'rambler-ui/SideNav'
import {TickIcon} from 'rambler-ui/icons/forms'
import {FacebookIcon} from 'rambler-ui/icons/profiles'
import {RamblerAutoIcon} from 'rambler-ui/icons/services'

export default class SideNavExampleHref extends Component {
  render() {
    return (
      <div>
        <div style={{width: '300px', display: 'inline-block'}}>
          <SideNav>
            <SideNavItem
              container={<a href="#/components/icons/forms" />}
              icon={<TickIcon />}>
              Иконки форм
            </SideNavItem>
            <SideNavItem
              container={<a href="#/components/icons/profiles" />}
              icon={<FacebookIcon />}>
              Иконки профилей
            </SideNavItem>
            <SideNavItem
              container={<a href="#/components/icons/services" />}
              icon={<RamblerAutoIcon />}>
              Иконки сервисов
            </SideNavItem>
          </SideNav>
        </div>
      </div>
    )
  }
}
