import React, { Component } from 'react'
import Dropdown from 'rambler-ui/Dropdown'
import Button from 'rambler-ui/Button'
import { ApplyTheme } from 'rambler-ui/theme'

export default class DropdownExample extends Component {

  state = {
    isOpenedFixed: false,
    isOpenedRelative: false
  };

  onClickFixed = () => {
    this.setState({
      isOpenedFixed: true
    })
  };

  onClickRelative = () => {
    this.setState({
      isOpenedRelative: true
    })
  };

  onCloseFixed = () => {
    this.setState({
      isOpenedFixed: false
    })
  };

  onCloseRelative = () => {
    this.setState({
      isOpenedRelative: false
    })
  };

  render() {
    return (
      <ApplyTheme>
        <div>
          <div style={{paddingBottom: '150px'}}>
            <Dropdown
              anchorFullWidth={true}
              isOpened={this.state.isOpenedRelative}
              onClose={this.onCloseRelative}
              anchor={<Button onClick={this.onClickRelative}>Открыть Dropdown Relative</Button>}
            >
              <div>
                <p>Dropdown content</p>
                <div>
                  <Button type="secondary" onClick={this.onCloseRelative}>Закрыть</Button>
                </div>
              </div>
            </Dropdown>
          </div>
          <div>
            <Dropdown
              appendToBody={true}
              anchorFullWidth={true}
              isOpened={this.state.isOpenedFixed}
              onClose={this.onCloseFixed}
              anchorPointY="center"
              anchor={<Button type="outline" onClick={this.onClickFixed}>Открыть Dropdown Fixed</Button>}
            >
              <div>
                <p>Dropdown content</p>
                <div>
                  <Button type="secondary" onClick={this.onCloseFixed}>Закрыть</Button>
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </ApplyTheme>
    )
  }

}
