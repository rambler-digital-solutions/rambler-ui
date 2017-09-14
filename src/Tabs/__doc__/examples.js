import { Tabs, TabsItem } from 'rambler-ui/Tabs'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

const values = ['Day', 'Week', 'Month', 'Year']

export default class ToggleExample extends Component {

  state = {
    selected: values[1]
  };

  render() {
    const value = this.state.selected

    return (
      <ApplyTheme>
        <div>
          <div>
            <h4>default</h4>
            <Tabs>
              {values.map(item => (
                <TabsItem key={item} isSelected={value === item} title={item} onClick={() => { this.setState({ selected: item }) }}>
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
          <div style={{marginTop: 40}}>
            <h4>size: medium, Tab with href prop</h4>
            <Tabs size="medium">
              {values.map(item => (
                <TabsItem key={item} isSelected={value === item} href={'#/components/Tabs'}>
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
          <div style={{marginTop: 40}}>
            <h4>disabled</h4>
            <Tabs disabled={true}>
              {values.map((item, index) => (
                <TabsItem key={item} isSelected={value === item} href={index % 2 ? '#/components/Tabs' : null} >
                  { item }
                </TabsItem>
              ))}
            </Tabs>
          </div>
        </div>
      </ApplyTheme>
    )

  }

}
