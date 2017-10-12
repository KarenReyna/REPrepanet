import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import * as Types from '../constants';

export class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        idCustomized: '-1'
      } as Types.User
    }
  }

  handleChange(type: string | undefined, newValue: string) {
    let newState = type && 
      type == "name" ? 
        { user: {...this.state.user, name: newValue}} : 
      type == "email" ? 
        { user: {...this.state.user, email: newValue}} : 
      type == "password" ?
        { user: {...this.state.user, password: newValue}} : 
      type == "passwordConf" ?
        { user: {...this.state.user, passwordConf: newValue}} : 
      type == "privileges" ?
        { user: {...this.state.user, privileges: newValue}} : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancel" onClick = {this.props.registerClose}/>,
      <FlatButton label = "Register" onClick = {() => this.props.registerSubmit(this.state.user)}/>
    ];
    return (
      <Dialog 
        open = {this.props.open} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.registerClose}>
          <TextField
              hintText="Nombre"
              data-type="name"
              floatingLabelText="Nombre"
              onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Email"
            data-type="email"
            floatingLabelText="Email"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Contraseña"
            data-type="password"
            floatingLabelText="Contraseña"
            type="password"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Confirmación de contraseña"
            data-type="passwordConf"
            floatingLabelText="Confirmación de contraseña"
            type="password"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
              hintText="Privilegios"
              data-type="privileges"
              floatingLabelText="Privilegios"
              onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          {this.props.registerFailed && <p>El usuario ya existe</p>}
          {this.props.loading && <LinearProgress mode="indeterminate" />}
      </Dialog>)
  }
}