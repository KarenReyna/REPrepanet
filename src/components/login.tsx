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
      <FlatButton label = "Cancel" onClick = {this.props.loginClose}/>,
      <FlatButton label = "Login" onClick = {() => this.props.loginSubmit(this.state.email, this.state.password)}/>
    ];
    return (
      <Dialog 
        open = {this.props.open} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.loginClose}>
          <TextField
            hintText="Email"
            data-type="email"
            floatingLabelText="Email"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Password"
            data-type="password"
            floatingLabelText="Password"
            type="password"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />

          {this.props.loading && <LinearProgress mode="indeterminate" />}
      </Dialog>)
  }
}