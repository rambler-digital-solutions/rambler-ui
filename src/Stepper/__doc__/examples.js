import { Stepper, Step } from 'rambler-ui/Stepper'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'
import Button from 'rambler-ui/Button'
import TickIconMedium from 'rambler-ui/icons/forms/TickIconMedium'

const recovery = ['Проверка почты', 'Восстановление пароля']
const buy = ['Выберите товар', 'Выберите адрес доставки', 'Оплата']
const quiz = ['Черновик', 'Опубликован', 'Завершен', 'Закрыт']

export default class StepperExample extends Component {
  state = {
    value: 1
  }

  onChange = (e, index) => {
    this.setState({value: index})
  }

  onStepClick = (e, index) => {
    this.setState({value: index})
  }

  nextStep = () => {
    if (this.state.value === 3)
      return
    this.setState({value: this.state.value + 1})
  }

  previousStep = () => {
    if (this.state.value === 0)
      return
    this.setState({value: this.state.value - 1})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          Поведение: steb-by-step
          <div style={{marginTop: '25px', width: '500px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {recovery.map((item, index) =>
                <Step key={index}>{item}</Step>)}
            </Stepper>
          </div>
          <div style={{width: '500px', marginTop: '50px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {buy.map((item, index) =>
                <Step key={index}>{item}</Step>)}
            </Stepper>
          </div>
          Поведение: отображение конкретного статуса и свободный переход между ними
          <div style={{marginTop: '25px'}}>
            <Stepper value={this.state.value} onChange={this.onChange}>
              {quiz.map((item, index) => (
                <Step
                  key={index}
                  disabled={false}
                  completed={false}
                  icon={this.state.value === index ? <TickIconMedium size={10} color="#fff" /> : undefined}
                  onClick={e => {
                    e.preventDefault()
                    this.onChange(e, index)
                  }}>{item}</Step>
              ))}
            </Stepper>
          </div>
          <div style={{fontWeight: '500', margin: '20px 0'}}>this.state.value: {this.state.value}</div>
          <Button size="small" type="secondary" onClick={this.previousStep}>Previous step</Button>
          <Button size="small" type="secondary" style={{marginLeft: '50px'}} onClick={this.nextStep}>Next step</Button>
        </div>
      </ApplyTheme>
    )
  }
}
