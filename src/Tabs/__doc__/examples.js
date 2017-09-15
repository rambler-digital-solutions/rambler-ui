import { Tabs, TabsItem } from 'rambler-ui/Tabs'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

const values = ['Day', 'Week', 'Month', 'Year']

export default class ToggleExample extends Component {

  state = {
    value: values[1]
  };

  handleChange(event, value) {
    this.setState({ value })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{marginBottom: 40}}>
            <h4>default</h4>
            <Tabs value={this.state.value} onChange={::this.handleChange}>
              {values.map(item => (
                <TabsItem value={item}>
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
          <div style={{marginBottom: 40}}>
            <h4>size: medium, Tab with href prop</h4>
            <Tabs size="medium" value={this.state.value} onChange={::this.handleChange}>
              {values.map(item => (
                <TabsItem href={'#/components/Tabs'} value={item}>
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
          <div style={{marginBottom: 40}}>
            <h4>disabled</h4>
            <Tabs disabled={true} value={this.state.value} onChange={::this.handleChange}>
              {values.map((item, index) => (
                <TabsItem href={index % 2 ? '#/components/Tabs' : null} value={item}>
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
          <div>this.state.value: <b>{this.state.value}</b></div>
        </div>
      </ApplyTheme>
    )

  }

}
