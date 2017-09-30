import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
export class Login extends React.Component<any, any> {
  public render() {
    const actions = [
      <FlatButton label = "Cancel" onClick = {this.props.loginClose}/>,
      <FlatButton label = "Login" onClick = {this.props.loginSubmit}/>
    ];
    
    return <Dialog open = {this.props.open} actions = {actions} modal = {true}>
            <TextField
              hintText="Email"
            /><br />
            <TextField
              hintText="Password"
            /><br />
          </Dialog>
  }
}