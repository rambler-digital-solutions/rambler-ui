import React, {Component} from 'react'

function withError(Target) {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = {hasError: false}
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        info
      })
    }

    render() {
      if (this.state.hasError) return <div>Здесь что-то пошло не так…</div>

      return <Target {...this.props} />
    }
  }

  ErrorBoundary.displayName = `withError(${Target.name ||
    Target.displayName ||
    Target.constructor.name})`

  return ErrorBoundary
}

export default withError
