import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as Types from '../constants';

export class DeleteUser extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        idCustomized: '-1'
      } as Types.User
    }
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.deleteUserHide}/>,
      <FlatButton label = "Eliminar" onClick = {() => this.props.deleteUserSubmit(this.state.user)}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.deleteUserHide}>
          <p>¿Está seguro que desea eliminar?</p>
      </Dialog>)
  }
}