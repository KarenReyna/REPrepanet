import * as React from 'react';
import Content from '../elements/Content'
import List from '../elements/List';
import { Category } from 'Config/constants';

export default class Categories extends React.Component<any, any> {
  constructor() {
    super();
  }

  public render() {
      var data = this.props.dataArray as Category[];
      console.log(data)
      if(data == null) {
        data = [];
      }
      return(
        <Content style="rightContent">
          Lista de categorias
          <br/>
          <List>
            {data.map((category) => (
              <li key={category.name}>
                <a href='#'>{category.name}</a>
                <p>{category.description}</p>
              </li>
            ))}
          </List>
        </Content>);
  }
}