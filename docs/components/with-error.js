import React, {Component} from 'react'
import injectSheet from 'docs/utils/theming'

const styles = theme => ({
  error: {
    color: theme.colors.red,
    borderWidth: '0px',
    whiteSpace: 'pre-wrap',
    margin: 0,
    lineHeight: '18px',
    fontFamily: 'Menlo, Monaco, Courier New, Courier, monospace',
    fontSize: '13px'
  }
})

function withError(Target) {
  class ErrorBoundary extends Component {
    state = {
      hasError: false
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        info
      })
    }

    render() {
      const {hasError, error, info} = this.state
      if (hasError)
        return (
          <pre className={this.props.classes.error}>
            {error.toString()}
            {'\n'}
            {info.componentStack}
          </pre>
        )

      return <Target />
    }
  }

  ErrorBoundary.displayName = `withError(${Target.name ||
    Target.displayName ||
    Target.constructor.name})`

  return injectSheet(styles)(ErrorBoundary)
}

export default withError
