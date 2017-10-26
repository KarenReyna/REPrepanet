import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange(type: string | undefined, newValue: string) {
    let newState = type && type == "email" ? 
      { email: newValue } : type == "password" ? 
      { password: newValue } : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.loginHide}/>,
      <FlatButton label = "Entrar" onClick = {() => this.props.loginSubmit({email: this.state.email, password: this.state.password})}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.loginClose}>
          <TextField
            hintText="Correo electrónico"
            data-type="email"
            floatingLabelText="Correo electrónico"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Contraseña"
            data-type="password"
            floatingLabelText="Contraseña"
            type="password"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          {this.props.loginFailed && <p>El usuario y/o contraseña están incorrectos</p>}
          {this.props.waiting && <LinearProgress mode="indeterminate" />}
      </Dialog>)
  }
}