import React from 'react'
import {Tabs, TabsItem} from 'rambler-ui/Tabs'
import {Link} from 'react-router-dom'

export default function TabsRouterExample() {
  return (
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
}
