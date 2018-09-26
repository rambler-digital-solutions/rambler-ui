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
    }

    state = {
      value: this.props.value,
      sourceType: 'global'
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value)
        this.setState({
          value: nextProps.value
        })
    }

    onSubmit = () => {
      const {value, sourceType} = this.state
      this.props.onSubmit(value, {sourceType})
    }

    onSearch = e => {
      const value = e.target.value
      const {sourceType} = this.state
      this.setState({value})
      this.props.onSearch(value, {sourceType})
    }

    changeSourceType = sourceType => {
      this.setState({sourceType})
    }

    clearForm = () => {
      const value = ''
      const {sourceType} = this.state
      this.setState({value})
      this.inputNode.focus()
      this.props.onSearch(value, {sourceType})
    }

    onKeyDown = e => {
      if (!this.inputNode)
        // на всякий случай проверяем не пришло ли событие после анмаунта компонента
        return
      const {value, sourceType} = this.state

      switch (e.key) {
      case 'Enter':
        e.preventDefault()
        this.props.onPressEnter(value, {sourceType})
        break
      }
    }

    setNode = name => node => {
      this[`${name}Node`] = node
    }

    render() {
      const {value, sourceType} = this.state

      return (
        <Search
          {...this.props}
          value={value}
          searchOptions={{sourceType}}
          clearForm={this.clearForm}
          setNode={this.setNode}
          onSubmit={this.onSubmit}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onKeyDown={this.onKeyDown}
          onSearch={this.onSearch}
          changeSourceType={this.changeSourceType}
          setHighlightedId={this.setHighlightedId}
        />
      )
    }
  }
}
