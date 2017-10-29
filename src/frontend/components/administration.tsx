import * as React from 'react';
import Button from '../elements/Button';
import Content from '../elements/Content';
import List from '../elements/List';

export default class Administration extends React.Component<any, any> {
  public render() {
      var data = this.props.dataArray;
      if(data == null) {
        data = [];
      }
      return(
        <Content style="rightContent">
          <br />
          <Button label="Registrar usuario" onClick={this.props.registerClicked} />
          <br />
          <Button label="Añadir Categoría" onClick={this.props.newCategoryShow} />
          <br />
          <Button label="Añadir Recurso" onClick={this.props.newResourceShow} />
          <br />
          <List>
            {data.map((user) => (
              <li key={user.key}>
                <a href='#'>{user.name}</a>
                <p>{user.privileges}</p>
              </li>
            ))}
          </List>
      </Content>);
  }
}