import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import * as Types from '../constants';

export class DeleteUser extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(this.state);
    this.state = {
      delete: this.props.deleteUser
    }
    console.log(this.state);
  }

  public render() {
    var data= this.props.deleteUserData;
    if(data != null){
      console.log(data);
    }
    console.log("deleteUserData "+this.props.deleteUserData);
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.deleteUserHide}/>,
      <FlatButton label = "Eliminar" onClick = {() => this.props.deleteUserSubmit(this.props.deleteUserData)}/>
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