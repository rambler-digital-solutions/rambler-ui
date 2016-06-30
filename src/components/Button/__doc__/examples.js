
import Button from 'rambler-ui/Button'
import RamblerAutoIcon from 'rambler-ui/icons/services/RamblerAutoIcon'

export default () => (
  <div>
    <Button size="large" href="https://rambler.ru" target="_blank">Кнопка-ссылка</Button>
    <Button size="large" onClick={() => alert('onClick')}>Кликни в меня</Button>
    <Button size="large" type="dark" icon={<RamblerAutoIcon />}>Кликни в меня</Button>
  </div>
)
