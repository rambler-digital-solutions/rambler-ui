import React, {Component} from 'react'
import Dropdown from 'rambler-ui/Dropdown'
import Button from 'rambler-ui/Button'
import Input from 'rambler-ui/Input'

export default class DropdownExample extends Component {
  state = {
    isOpenedFixed: false,
    isOpenedRelative: false
  }

  openRelative = () => {
    this.setState({
      isOpenedRelative: true
    })
  }

  сloseRelative = () => {
    this.setState({
      isOpenedRelative: false
    })
  }

  openFixed = () => {
    this.setState({
      isOpenedFixed: true
    })
  }

  closeFixed = () => {
    this.setState({
      isOpenedFixed: false
    })
  }

  render() {
    const {state} = this
    return (
      <div>
        <div style={{paddingBottom: '150px'}}>
          <Dropdown
            anchorFullWidth={true}
            isOpened={state.isOpenedRelative}
            onRequestClose={() => {
              if (!this.preventCloseRelative) this.сloseRelative()
              this.preventCloseRelative = false
            }}
            anchor={
              <Input
                style={{width: 200}}
                onClick={() => {
                  if (!state.isOpenedRelative) this.openRelative()
                }}
                onMouseDown={() => {
                  if (state.isOpenedRelative) this.preventCloseRelative = true
                }}
                placeholder="Открыть Dropdown Relative"
              />
            }>
            <div>
              <p>Dropdown content</p>
              <div>
                <Button type="secondary" onClick={this.сloseRelative}>
                  Закрыть
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            appendToBody={true}
            anchorFullWidth={true}
            isOpened={state.isOpenedFixed}
            onClose={this.closeFixed}
            anchorPointY="center"
            anchor={
              <Button type="outline" onClick={this.openFixed}>
                Открыть Dropdown Fixed
              </Button>
            }>
            <div>
              <p>Dropdown content</p>
              <div>
                <Button type="secondary" onClick={this.closeFixed}>
                  Закрыть
                </Button>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
