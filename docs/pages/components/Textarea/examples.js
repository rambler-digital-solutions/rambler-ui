import React, {Component} from 'react'
import Textarea from 'rambler-ui/Textarea'
import FormGroup from 'rambler-ui/FormGroup'
import FieldStatus from 'rambler-ui/FieldStatus'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'

export default class TextareaExample extends Component {
  state = {
    value: ''
  }

  onChange = (event, value) => {
    this.setState({
      value
    })
  }

  render() {
    return (
      <div>
        <FormGroup inline={true} label="Имя">
          <Textarea
            variation="regular"
            value={this.state.value}
            onChange={this.onChange}
            placeholder="Имя"
            style={{width: '500px'}}
            textareaStyle={{minHeight: '100px'}}
            iconRight={<RamblerMailIcon />}
            iconLeft={<RamblerMailIcon />}
          />
        </FormGroup>

        <FormGroup inline={true} label="With error status">
          <FieldStatus type="error" message="Some error">
            <Textarea
              status="error"
              size="small"
              value={this.state.value}
              onChange={this.onChange}
              style={{width: '500px'}}
              placeholder="Отчество"
            />
          </FieldStatus>
        </FormGroup>

        <FormGroup
          inline={true}
          label="With max length restriction and counter">
          <Textarea
            variation="regular"
            value={this.state.value}
            onChange={this.onChange}
            style={{width: '500px'}}
            maxLength={20}
            characterCounter={true}
          />
        </FormGroup>

        <FormGroup inline={true} label="Disabled">
          <Textarea
            value={this.state.value}
            onChange={this.onChange}
            style={{width: '500px'}}
            disabled
          />
        </FormGroup>
      </div>
    )
  }
}
