import React, {Component} from 'react'

export default function provideSearch(Search) {
  return class extends Component {
    static defaultProps = {
      value: '',
      placeholder: '',
      division: null,
      appendToBody: true,
      autoPositionY: false,
      searchButton: null,
      searchButtonStyle: {},
      searchButtonClassName: '',
      inputProps: {},
      searchButtonProps: {},
      sourceButtonsProps: () => ({}),
      sourceType: false,
      onSearch() {},
      onFocus() {},
      onBlur() {},
      onSelectItem() {},
      onClickItem() {},
      onRemoveItem() {},
      onHoverItem() {},
      onSubmit() {},
      onPressEnter() {}
    };

    state = {
      value: this.props.value
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value)
        this.setState({
          value: nextProps.value
        })
    }

    onSubmit = (options) => {
      const args = [this.state.value]
      if (options) 
        args.push(options)
      this.props.onSubmit(...args)
    }
  
    onSearch = (e, options = {}) => {
      const value = e.target.value
      this.setState({value})
      this.props.onSearch(value, options)
    }

    clearForm = () => {
      const value = ''
      this.setState({value})
      this.inputNode.focus()
      this.props.onSearch(value)
    }
  
    onKeyDown = (e) => {
      if (!this.inputNode) // на всякий случай проверяем не пришло ли событие после анмаунта компонента
        return

      switch (e.key) {
      case 'Enter':
        e.preventDefault()
        this.props.onPressEnter(this.state.value)
        break
      }
    }
  
    setNode = name => node => {
      this[`${name}Node`] = node
    }

    render() {
      const {
        value
      } = this.state

      return <Search
        {...this.props}
        value={value}
        clearForm={this.clearForm}
        setNode={this.setNode}
        onSubmit={this.onSubmit}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onKeyDown={this.onKeyDown}
        onSearch={this.onSearch}
        setHighlightedId={this.setHighlightedId}
      />
    }
  }
}