import { Tabs, TabsItem } from 'rambler-ui/Tabs'
import { Link } from 'react-router'

export default () => (
  <div>
    <Tabs>
      <TabsItem container={ <Link to="/home"/> }>Кнопка-ссылка</TabsItem>
    </Tabs>
  </div>
)
