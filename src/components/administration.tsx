import * as React from 'react';
import Button from '../elements/Button';
import Content from '../elements/Content'
import List from '../elements/List';

export default class Administration extends React.Component<any, any> {
  public render() {
    var data = this.props.dataArray;
    if(data == null) {
      data = [{_id: 0, name: '', email: '',},];
    }
      return(
        <Content style="rigthContent">
          <br />
          <Button label="Registrar usuario" onClick={this.props.registerClicked} />
          <br />
          <List>
            {data.map((user) => (
              <li key={user.name}>
                <a href='#'>{user.name}</a>
                <p>{user.privileges}</p>
              </li>
            ))}
          </List>
      </Content>);
  }
}