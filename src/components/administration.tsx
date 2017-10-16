import * as React from 'react';
import Button from '../elements/Button';
import Content from '../elements/Content'
import List from '../elements/List';

const usersList = [
  {
    key: 1,
    name: 'Usuario 1',
    privileges: 'Administración | Colaboración',
  },
  {
    key: 2, 
    name: 'Usuario 2',
    privileges: 'Colaboración',
  },
  {
    key: 3, 
    name: 'Usuario 3',
    privileges: 'Colaboración',
  },
  {
    key: 4, 
    name: 'Usuario 4',
    privileges: 'Colaboración',
  },
  {
    key: 5, 
    name: 'Usuario 5',
    privileges: 'Colaboración',
  },
];

export default class Administration extends React.Component<any, any> {
  public render() {
      return(
        <Content style="rigthContent">
          <br />
          <Button label="Registrar usuario" onClick={this.props.registerClicked} />
          <br />
          <List>
            {usersList.map((user) => (
              <li key={user.key}>
                <a>{user.name}</a>
                <p>{user.privileges}</p>
              </li>
            ))}
          </List>
      </Content>);
  }
}