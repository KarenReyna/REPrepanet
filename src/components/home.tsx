import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
export class Home extends React.Component<any, any> {
  public render() {
    return <RaisedButton label = "Login" onClick={this.props.loginClicked}/>
  }
}