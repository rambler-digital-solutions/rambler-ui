import React, {Component} from 'react'
import Loader from 'rambler-ui/Loader'
import Button from 'rambler-ui/Button'
import {ApplyTheme} from 'rambler-ui/theme'

export default class LoaderExample extends Component {
  state = {
    loading: false,
    buttonLoading: false
  }

  load = () => {
    const loading = new Promise(resolve => {
      setTimeout(() => {
        this.setState({
          buttonLoading: false
        })

        resolve()
      }, 3000)
    })

    this.setState({
      loading,
      buttonLoading: true
    })
  }

  render() {
    return (
      <div>
        <ApplyTheme>
          <div>
            <div style={{height: 200, position: 'relative'}}>
              <Loader loading={this.state.loading}>
                Hello world
                <Button
                  type="secondary"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0
                  }}
                  loading={this.state.buttonLoading}
                  onClick={this.load}>
                  Загрузить
                </Button>
              </Loader>
            </div>
          </div>
        </ApplyTheme>
      </div>
    )
  }
}
