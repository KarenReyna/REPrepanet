import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';

import { isEmpty } from 'Config/helper';

import {
  Status,
  LoginAttempt
} from 'Config/constants';

import { LoginForm } from 'Presentational/components/login';
class Login extends React.Component<any, any> {
    componentWillReceiveProps(nextProps) {
        if (!isEmpty(nextProps.users.current)){
            this.props.history.push('/');
        }
    }
  render() {
    return (
      <div>
        <LoginForm
            visible = {this.props.users.login.open}
            hide = {this.props.loginHide}
            submit = {this.props.loginSubmit}
            waiting = {this.props.users.status == 
                                    Status.WaitingOnServer}
            failed = {this.props.users.error && 
                    this.props.users.error.status && 
                    this.props.users.error.status == 400}
        />  
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        loginSubmit: (loginAttempt: LoginAttempt) => 
            dispatch(thunks.users.login(loginAttempt)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)