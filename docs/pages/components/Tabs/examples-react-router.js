import {Tabs, TabsItem} from 'rambler-ui/Tabs'
import {Link} from 'react-router'

export default () => (
  <div>
    <Tabs>
      <TabsItem container={<Link to="/home" />}>Кнопка-ссылка</TabsItem>
      <TabsItem
        container={({activeClassName}) => (
          <Link to="/home" activeClassName={activeClassName} />
        )}>
        Кнопка-ссылка
      </TabsItem>
    </Tabs>
  </div>
)
