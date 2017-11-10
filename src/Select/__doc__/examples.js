import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Popup } from 'rambler-ui/Popup'
import Loader from 'rambler-ui/Loader'
import Select from 'rambler-ui/Select'
import { MenuItem } from 'rambler-ui/Menu'
import PhoneIcon from 'rambler-ui/icons/forms/PhoneIcon'
import EllipsisIcon from 'rambler-ui/icons/forms/EllipsisIcon'
import { ApplyTheme } from 'rambler-ui/theme'

const data = [...Array(5)].map((item, i) => `Foo${i}`)

const objectData = [...Array(15)].map((item, i) => ({
  id: i,
  key: `Baz${i}`
}))

const objectCustomData = [...Array(15)].map((item, i) => ({
  id: i,
  str1: `Строка 1 элемента ${i}`,
  str2: `Строка 2 элемента ${i}`,
  str3: `Строка 3 элемента ${i}`
}))

export default class SelectExample extends Component {

  state = {
    value1: null,
    value2: 'Bar1',
    value3: null,
    value4: null,
    value5: null,
    data,
    objectData,
    objectValue: null,
    objectValue2: null,
    asyncData: [],
    asyncValue: null,
    asyncValue2: null,
    objectCustomData,
    objectValue3: null,
    objectValue4: null,
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

  setValue = key => (value) => {
    this.setState({
      [key]: value
    })
  }

  filterData = (search) => {
    const filteredData = search === '' ?
      data :
      data.filter(item => search !== '' && item.indexOf(search) > -1)

    this.setState({
      data: filteredData
    })
  }

  filterObjectData = (search) => {
    const filteredData = search === '' ?
      objectData :
      objectData.filter(item => search !== '' && item.key.indexOf(search) > -1)

    this.setState({
      objectData: filteredData
    })
  }

  filterObjectCustomData = (search) => {
    const filteredData = search === '' ?
      objectCustomData :
      objectCustomData.filter(item => search !== '' && item.str1.indexOf(search) > -1)

    this.setState({
      objectCustomData: filteredData
    })
  }

  requestData = (search) => {
    this.setState({
      asyncData: []
    })

    clearTimeout(this.requestTimeout)

    this.requestTimeout = setTimeout(() => {
      if (search === '')
        return

      this.setState({
        asyncData: new Promise((resolve) => {
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
              {this.state.data.map(item => (
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
                value={this.state.asyncValue}
                onChange={this.setValue('asyncValue')}
                onSearch={this.requestData}>
                {this.state.asyncData.then ? [] : this.state.asyncData.map(item => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Loader>
          </div>

          <div style={{ width: '45%', marginBottom: 15 }}>
            <h3>Со значениями-объектами и кастомной стрелкой</h3>
            <Select
              placeholder="Type something..."
              value={this.state.objectValue}
              arrowIcon={
                <EllipsisIcon size={12} color='currentColor' />
              }
              inputValueRenderer={value => value && value.key}
              valuesEquality={(a, b) => a === b || (a && b && a.id === b.id)}
              onChange={this.setValue('objectValue')}
              onSearch={this.filterObjectData}>
              {this.state.objectData.map(item => (
                <MenuItem value={item} key={item.id}>
                  <PhoneIcon /> {item.key}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ width: '66%', marginBottom: 55 }}>
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

          <div style={{ maxWidth: 300, marginBottom: 15 }}>
            <h3>Множественный выбор</h3>
            <Select
              multiple={true}
              placeholder="Select..."
              value={this.state.value4}
              onChange={this.setValue('value4')}>
              {this.state.data.map(item => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ maxWidth: 300, marginBottom: 15 }}>
            <h3>Множественный выбор c поиском</h3>
            <Select
              size="small"
              multiple={true}
              placeholder="Type something..."
              value={this.state.value5}
              onChange={this.setValue('value5')}
              onSearch={this.filterData}>
              {this.state.data.map(item => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ maxWidth: 300, marginBottom: 15 }}>
            <h3>Множественный выбор асинхронный</h3>
            <Loader loading={!!this.state.asyncData.then}>
              <Select
                multiple={true}
                placeholder="Type something..."
                value={this.state.asyncValue2}
                onChange={this.setValue('asyncValue2')}
                onSearch={this.requestData}>
                {this.state.asyncData.then ? [] : this.state.asyncData.map(item => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Loader>
          </div>

          <div style={{ maxWidth: 300, marginBottom: 55 }}>
            <h3>Множественный выбор со значениями-объектами</h3>
            <Select
              multiple={true}
              placeholder="Type something..."
              value={this.state.objectValue2}
              inputValueRenderer={value => value && value.key}
              valuesEquality={(a, b) => a === b || (a && b && a.id === b.id)}
              onChange={this.setValue('objectValue2')}
              onSearch={this.filterObjectData}>
              {this.state.objectData.map(item => (
                <MenuItem value={item} key={item.id}>
                  <PhoneIcon /> {item.key}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ maxWidth: 300, marginBottom: 15 }}>
            <h3>Кастомизированный с customElementRenderer, containerStyle и variation: regular</h3>
            <Select
              variation="regular"
              valuesEquality={(a, b) => a === b || (a && b && a.id === b.id)}
              value={this.state.objectValue3}
              menuStyle={{ maxHeight: 74 * 4 + 2 }}
              containerStyle={{minHeight: 74}}
              customElementRenderer={(value) => (
                <div style={{ paddingTop: 11, paddingBottom: 11, lineHeight: '14px' }}>
                  <div style={{fontSize: 13 }}>{value.str1}</div>
                  <div style={{fontSize: 11, marginTop: 5 }}>{value.str2}</div>
                  <div style={{fontSize: 11, marginTop: 5 }}>{value.str3}</div>
                </div>
              )}
              placeholder="Select..."
              onChange={this.setValue('objectValue3')}>
              {objectCustomData.map(item => (
                <MenuItem value={item} key={item.id} style={{paddingTop: 11, paddingBottom: 11, lineHeight:'14px'}}>
                  <div style={{width: '100%', flex: 'none', fontSize: 13}}>{item.str1}</div>
                  <div style={{width: '100%', flex: 'none', fontSize: 11, marginTop: 5}}>{item.str2}</div>
                  <div style={{width: '100%', flex: 'none', fontSize: 11, marginTop: 5 }}>{item.str3}</div>
                </MenuItem>
              ))}
            </Select>
          </div>

          <div style={{ maxWidth: 300, marginBottom: 55 }}>
            <h3>Кастомизированный с customElementRenderer и поиском</h3>
            <Select
              valuesEquality={(a, b) => a === b || (a && b && a.id === b.id)}
              value={this.state.objectValue4}
              customElementRenderer={(value) => (
                <div style={{paddingTop: 11, paddingBottom: 11, lineHeight: '14px'}}>
                  <div style={{fontSize: 13 }}>{value.str1}</div>
                  <div style={{fontSize: 11, marginTop: 5 }}>{value.str2}</div>
                  <div style={{fontSize: 11, marginTop: 5 }}>{value.str3}</div>
                </div>
              )}
              placeholder="Type something..."
              onSearch={this.filterObjectCustomData}
              onChange={this.setValue('objectValue4')}>
              {this.state.objectCustomData.map(item => (
                <MenuItem value={item} key={item.id} style={{paddingTop: 11, paddingBottom: 11, lineHeight:'14px'}}>
                  <div style={{width: '100%', flex: 'none', fontSize: 13 }}>{item.str1}</div>
                  <div style={{width: '100%', flex: 'none', fontSize: 11, marginTop: 5 }}>{item.str2}</div>
                  <div style={{width: '100%', flex: 'none', fontSize: 11, marginTop: 5 }}>{item.str3}</div>
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
          <div>this.state.value4: <b>{`${JSON.stringify(this.state.value4)}`}</b></div>
          <div>this.state.value5: <b>{`${JSON.stringify(this.state.value5)}`}</b></div>
          <div>this.state.objectValue1: <b>{`${JSON.stringify(this.state.objectValue1)}`}</b></div>
          <div>this.state.objectValue2: <b>{`${JSON.stringify(this.state.objectValue2)}`}</b></div>
          <div>this.state.objectValue3: <b>{`${JSON.stringify(this.state.objectValue3)}`}</b></div>
          <div>this.state.objectValue4: <b>{`${JSON.stringify(this.state.objectValue4)}`}</b></div>
        </div>
      </ApplyTheme>
    )
  }

}
