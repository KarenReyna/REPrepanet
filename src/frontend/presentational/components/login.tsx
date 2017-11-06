import * as React from 'react';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
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
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.hide}>
          <DialogTitle>Entrar</DialogTitle>
          <DialogContent>
             <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Correo electrónico"
              type="email"
              fullWidth
            /><br />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Contraseña"
              type="password"
              fullWidth
              onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, (e.target as HTMLElement).dataset.txt)}
            /><br />
            {this.props.failed && <p>El usuario y/o contraseña están incorrectos</p>}
            {this.props.waiting && <LinearProgress mode="indeterminate" />}
          </DialogContent>
          <DialogActions>
            <Button 
              onClick = {this.props.hide} 
              color="primary">
                Cancelar
            </Button>,
            <Button 
              onClick = {() => this.props.submit({email: this.state.email, 
                password: this.state.password})}
              color="primary">
              Entrar
            </Button>
          </DialogActions>
      </Dialog>)
  }
}