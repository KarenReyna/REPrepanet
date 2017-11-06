import * as React from 'react';
import Button from 'Presentational/elements/Button';
import Content from 'Presentational/elements/Content';
import List from 'Presentational/elements/List';
import { Status } from 'Config/constants';

import { LinearProgress } from 'material-ui';

function createContent(object) {
  switch(object.status) {
    case Status.Ready:
      if(object && object.all && object.all.length > 0)
        return object.all.map((user) => (
          <li key={user._id}>
            <a href='#'>{user.name}</a>
          </li>
        ));
      return (<p>No hay usuarios</p>);
    case Status.Failed:
      return (<p>No hay conexión a Internet</p>);
    case Status.WaitingOnServer:
    default:
      return (<LinearProgress mode="indeterminate" />);
  }
}

export class AdminView extends React.Component<any, any> {
  public render() {
      let userContent = createContent(this.props.users);
      return(
        <Content style="rightContent">
          <br />
          <Button label="Registrar usuario" onClick={this.props.updateUserShow} />
          <br />
          <Button label="Añadir Categoría" onClick={this.props.updateCategoryShow} />
          <br />
          <Button label="Añadir Recurso" onClick={this.props.updateResourceShow} />
          <br />
          <List>
            {userContent}
          </List>
      </Content>);
  }
}