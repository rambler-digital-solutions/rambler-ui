import PropTypes from 'prop-types'
import Typography from './Typography'

const List = ({numbered, ...props}) => (
  <Typography tagName={numbered ? 'ol' : 'ul'} {...props} type="list" />
)

List.propTypes = {
  /**
   * Нумерованный список
   */
  numbered: PropTypes.bool
}

export default List
