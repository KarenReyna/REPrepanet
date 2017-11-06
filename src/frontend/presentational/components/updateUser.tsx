import * as React from 'react';
import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { LinearProgress } from 'material-ui/Progress';
import { User } from 'Config/constants';

export class UpdateUser extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        idCustomized: '-1'
      } as User
    }
  }

  handleChange(type: string | undefined, newValue: string | undefined) {
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
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.hide}>
          <DialogTitle>Registro</DialogTitle>
          <DialogContent>
          <TextField
              label="Nombre"
              data-type="name"
              onChange={(e) => 
                this.handleChange((e.target as HTMLElement).dataset.type, 
                (e.target as HTMLElement).dataset.txt)}
          /><br />
          <TextField
            label="Email"
            data-type="email"
            onChange={(e) => 
              this.handleChange((e.target as HTMLElement).dataset.type, 
              (e.target as HTMLElement).dataset.txt)}
          /><br />
          <TextField
            label="Contraseña"
            data-type="password"
            type="password"
            onChange={(e) => 
              this.handleChange((e.target as HTMLElement).dataset.type, 
              (e.target as HTMLElement).dataset.txt)}
          /><br />
          <TextField
            label="Confirmación de contraseña"
            data-type="passwordConf"
            type="password"
            onChange={(e) => 
              this.handleChange((e.target as HTMLElement).dataset.type, 
              (e.target as HTMLElement).dataset.txt)}
          /><br />
          {this.props.registerFailed && <p>El usuario ya existe</p>}
          {this.props.waiting && <LinearProgress mode="indeterminate" />}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick = {this.props.hide} 
            color='primary'>
              Cancelar
          </Button>,
          <Button 
            onClick = {() => this.props.registerSubmit(this.state.user)}
            color='primary'>
              Registrar
          </Button>
        </DialogActions>
      </Dialog>)
  }
}