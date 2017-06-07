import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Popup } from 'rambler-ui/Popup'
import Loader from 'rambler-ui/Loader'
import Select from 'rambler-ui/Select'
import { MenuItem } from 'rambler-ui/Menu'
import PhoneIcon from 'rambler-ui/icons/forms/PhoneIcon'
import { ApplyTheme } from 'rambler-ui/theme'

const data = [...Array(5)].map((item, i) => `Foo${i}`)

const objectData = [...Array(15)].map((item, i) => ({
  id: i,
  key: `Baz${i}`
}))

export default class SelectExample extends Component {

  state = {
    value1: null,
    value2: 'Bar1',
    value3: null,
    data,
    objectData,
    objectValue: null,
    asyncData: [],
    asyncValue: null,
    popupIsOpened: false
  }

  openPopup = () => {
    this.setState({
      popupIsOpened: true
    })
  }

  closePopup = () => {
    this.setState({
      popupIsOpened: false
    })
  }

  setValue = key => value => {
    this.setState({
      [key]: value
    })
  }

  filterData = search => {
    const filteredData = search === '' ?
      data :
      data.filter(item => search !== '' && item.indexOf(search) > -1)

    this.setState({
      data: filteredData
    })
  }

  filterObjectData = search => {
    const filteredData = search === '' ?
      objectData :
      objectData.filter(item => search !== '' && item.key.indexOf(search) > -1)

    this.setState({
      objectData: filteredData
    })
  }

  requestData = search => {
    this.setState({
      asyncData: []
    })

    clearTimeout(this.requestTimeout)

    this.requestTimeout = setTimeout(() => {
      if (search === '')
        return

      this.setState({
        asyncData: new Promise(resolve => {
          setTimeout(() => {
            this.setState({
              asyncData: [
                search,
                `${search}${search}`,
                `${search}${search}${search}`
              ]
            })

            resolve()
          }, 500)
        })
      })
    }, 250)
  }

  render() {
    return (
      <ApplyTheme>
        <div>

          <div style={{ width: '50%', marginBottom: 15 }}>
            <h3>С плэйсхолдером и статусом</h3>
            <Select
              placeholder="Select..."
              status="success"
              value={this.state.value1}
              onChange={this.setValue('value1')}>
              {[...Array(5)].map((item, i) => (
                <MenuItem value={`Foo${i}`} key={i}>
                  Foo{i}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ width: '33%', marginBottom: 15 }}>
            <h3>С иконкой и начальным значением</h3>
            <Select
              size="small"
              icon={
                <PhoneIcon />
              }
              value={this.state.value2}
              onChange={this.setValue('value2')}>
              {[...Array(15)].map((item, i) => (
                <MenuItem value={`Bar${i}`} key={i}>
                  Bar{i}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ width: '50%', marginBottom: 15 }}>
            <h3>С поиском</h3>
            <Select
              placeholder="Type something..."
              value={this.state.value1}
              onChange={this.setValue('value1')}
              onSearch={this.filterData}>
              {this.state.data.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ width: '50%', marginBottom: 15 }}>
            <h3>Асинхронный</h3>
            <Loader loading={!!this.state.asyncData.then}>
              <Select
                placeholder="Type something..."
                searchable={true}
                value={this.state.asyncValue}
                onChange={this.setValue('asyncValue')}
                onSearch={this.requestData}>
                {!!this.state.asyncData.then ? [] : this.state.asyncData.map(item => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Loader>
          </div>

          <div style={{ width: '45%', marginBottom: 15 }}>
            <h3>Со значениями-объектами</h3>
            <Select
              placeholder="Type something..."
              value={this.state.objectValue}
              labelRenderer={value => value && value.key}
              valuesEquality={(a, b) => a === b || (a && b && a.id === b.id)}
              onChange={this.setValue('objectValue')}
              onSearch={this.filterObjectData}>
              {this.state.objectData.map((item) => (
                <MenuItem value={item} key={item.id}>
                  <PhoneIcon /> {item.key}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ width: '66%', marginBottom: 15 }}>
            <h3>Disabled</h3>
            <Select
              disabled={true}
              placeholder="Disabled"
              value={this.state.value3}
              onChange={this.setValue('value3')}>
              {[...Array(5)].map((item, i) => (
                <MenuItem value={`Baz${i}`} key={i}>
                  Baz{i}
                </MenuItem>
              ))}
            </Select>
          </div>

          <Popup
            title="Попап"
            showClose
            isOpened={this.state.popupIsOpened}
            okButton={
              <Button type="primary" size="small" onClick={this.closePopup}>
                Ок
              </Button>
            }
            onRequestClose={this.closePopup}
          >
            <Select
              autoFocus={true}
              value={this.state.value3}
              onChange={this.setValue('value3')}>
              {[...Array(5)].map((item, i) => (
                <MenuItem value={`Baz${i}`} key={i}>
                  Baz{i}
                </MenuItem>
              ))}
            </Select>
          </Popup>

          <div style={{ marginBottom: 15 }}>
            <h3>В попапе</h3>
            <Button onClick={this.openPopup}>
              Открыть
            </Button>
          </div>

          <div>this.state.value1: <b>{`${this.state.value1}`}</b></div>
          <div>this.state.value2: <b>{`${this.state.value2}`}</b></div>
          <div>this.state.value3: <b>{`${this.state.value3}`}</b></div>

        </div>
      </ApplyTheme>
    )
  }

}
