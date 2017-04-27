import React, { Component } from 'react'
import Tooltip from 'rambler-ui/Tooltip'
import Button from 'rambler-ui/Button'
import { ApplyTheme } from 'rambler-ui/theme'

export default class TooltipExample extends Component {

  render() {
    return (
      <ApplyTheme>
        <div>
          <Tooltip content="Tooltip">
            <Button type="secondary">Закрыть</Button>
          </Tooltip>
        </div>
      </ApplyTheme>
    )
  }

}
