import React from 'react'
import PropTypes from 'prop-types'
import Typography from './Typography'

const List = ({numbered, ...props}) => (
  <Typography {...props} tagName={numbered ? 'ol' : 'ul'} type="list" />
)

List.propTypes = {
  /**
   * Нумерованный список
   */
  numbered: PropTypes.bool
}

export default List
