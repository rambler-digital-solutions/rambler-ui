import Button from 'rambler-ui/Button'
import RamblerAutoIcon from 'rambler-ui/icons/services/RamblerAutoIcon'

export default () => (
  <div>
    <Button style={{margin: 20}} size="large" href="https://rambler.ru" target="_blank">ссылка rambler.ru</Button>
    <Button style={{margin: 20}} size="large" onClick={() => alert('onClick')}>Кликни в меня</Button>
    <Button style={{margin: 20}} size="large" type="dark" icon={<RamblerAutoIcon />}>Autorambler</Button>
  </div>
)
