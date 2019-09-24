import * as React from 'react';
import {ApplyTheme} from '../build/theme'
import Loader from '../build/Loader'
import Input from '../build/Input'
// import { Pagination } from '../build'
// import Pagination from '../build/Pagination'

export class Component extends React.Component<any, any> {

  render(): React.ReactNode {
    return (
      <ApplyTheme>
        <Loader className={'2'}/>
        <Input value={2} iconLeft={2} />
      </ApplyTheme>
    )
  }

}
