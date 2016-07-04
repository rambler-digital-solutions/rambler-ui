import Button from 'rambler-ui/Button'
import { Link } from 'react-router'

export default () => (
  <div>
    <Button container={ <Link to="/home"/> }>Кнопка-ссылка</Button>
  </div>
)
