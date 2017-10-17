import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class NewResource extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.newResourceHide}/>,
      <FlatButton label = "Añadir" onClick = {() => this.props.addNewResource()}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.newResourceHide}>
        <TextField
          hintText = "Nombre"
          floatingLabelText = "Nombre"/>
        <br />
        <TextField
          hintText = "Descripción"
          floatingLabelText = "Descripción"
          multiLine = {true}
          rows = {2}/>
        <br />
        <TextField
          hintText = "URL"
          floatingLabelText = "URL"/>
        <br />
        <RaisedButton
          containerElement='label'
          label='Imagen'>
          <input type="file" />
        </RaisedButton>
      </Dialog>)
  }
}