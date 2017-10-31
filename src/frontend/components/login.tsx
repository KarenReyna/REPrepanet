import * as React from 'react';
import Dialog, { DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { LinearProgress } from 'material-ui/Progress';

export class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange(type: string | undefined, newValue: string | undefined) {
    let newState = type && type == "email" ? 
      { email: newValue } : type == "password" ? 
      { password: newValue } : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <Button onClick = {this.props.loginHide}>Cancelar</Button>,
      <Button 
        onClick = {() => this.props.loginSubmit({email: this.state.email, 
          password: this.state.password})}>
        Entrar
      </Button>
    ];
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.loginClose}>
          <TextField
            label="Correo electrónico"
            data-type="email"
            onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, (e.target as HTMLElement).dataset.txt)}
          /><br />
          <TextField
            label="Contraseña"
            data-type="password"
            type="password"
            onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, (e.target as HTMLElement).dataset.txt)}
          /><br />
          {this.props.loginFailed && <p>El usuario y/o contraseña están incorrectos</p>}
          {this.props.waiting && <LinearProgress mode="indeterminate" />}
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>)
  }
}