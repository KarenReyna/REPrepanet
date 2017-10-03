import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const modalStyle = {
  textAlign: 'center', 
  maxWidth: 'none',
};

const buttonStyle = { 
  marginLeft: '10px',
};

export class Login extends React.Component<any, any> {
  public render() {
    const actions = [
      <RaisedButton label="Cancelar" onClick={this.props.loginClose} style={buttonStyle}/>,
      <RaisedButton label="Entrar" onClick={this.props.loginSubmit} primary={true} style={buttonStyle}/>
    ];

    return <Dialog title="REPrepanet" open={this.props.open} actions={actions} modal={true} contentStyle={modalStyle}>
            <TextField hintText="Correo electrónico"/><br />
            <TextField hintText="Contraseña"/><br />
           </Dialog>
  }
}
