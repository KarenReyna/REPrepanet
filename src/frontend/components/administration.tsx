import * as React from 'react';
import Button from '../elements/Button';
import Content from '../elements/Content'
import List from '../elements/List';

export default class Administration extends React.Component<any, any> {
  onItemClick(item, e) {  
    console.log(item);
    console.log(e);
    this.props.deleteUserClicked(item);
  }

  public render() {
      var data = this.props.dataArray;
      if(data == null) {
        data = [];
      }
      return(
        <Content style="rigthContent">
          <br />
          <Button label="Registrar usuario" onClick={this.props.registerClicked} />
          <br />
          <List>
            {data.map((user) => (
              <li key={user.key}>
                <a href='#'>{user.name}</a>
                <p>{user.privileges}</p>
                <Button label="Borrar usuario" 
                //onClick={this.props.deleteUserClicked} 
                  data={this.props.deleteUser} data-id={user.key} data-name={user.name}
                  onClick={this.props.deleteUserClicked.bind(this, user)}/>
              </li>
            ))}
          </List>
      </Content>);
  }
}