import React, {Component} from 'react'
import Input from 'rambler-ui/Input'
import FormGroup from 'rambler-ui/FormGroup'
import { ApplyTheme } from 'rambler-ui/theme'

export default class InputExample extends Component {

  render() {
    return (
      <ApplyTheme>
        <div>
        <FormGroup inline={true} label='label' fieldId='name'>
          <Input
            defaultValue
            style={{width: '100px'}}
            // {...input}
            // type='text'
            // id={input.name}
            // className={className}
            // autoFocus={autoFocus}
          />
        </FormGroup>
        </div>
      </ApplyTheme>
    )
  }

}
