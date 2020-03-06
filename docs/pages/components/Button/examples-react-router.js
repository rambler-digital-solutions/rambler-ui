import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'rambler-ui/Button'

export default function ButtonRouterExample() {
  return (
    <div>
      <Button container={<Link to="/home" />}>Кнопка-ссылка</Button>
    </div>
  )
}
