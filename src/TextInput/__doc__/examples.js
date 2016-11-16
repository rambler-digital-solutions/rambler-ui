import React, {Component} from 'react'
import TextInput from 'rambler-ui/TextInput'
import FormGroup from 'rambler-ui/FormGroup'
import InputStatus from 'rambler-ui/InputStatus'
import { ApplyTheme } from 'rambler-ui/theme'

export default class InputExample extends Component {

  render() {

    console.log('asds')

    return (
      <ApplyTheme>
        <div>
        <FormGroup inline={true} label='label' fieldId='name'>
          <TextInput
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
