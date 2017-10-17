import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { Register } from '../components/register';
import { loginShow, loginHide } from '../actions/login';
import { registerShow, registerHide } from '../actions/register';
import { loginFetch, registerFetch } from '../actions/thunks';
import * as Types from '../constants';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Home 
          loginShow = {this.props.loginShow}
          registerShow = {this.props.registerShow}/>
        <Login
          visible = {this.props.loginIsVisible}
          loginHide = {this.props.loginHide}
          loginSubmit = {this.props.loginSubmit}
          waiting = {this.props.loginIsWaiting}
          loginFailed = {this.props.loginFailed}/>
        <Register
          visible = {this.props.registerIsVisible}
          registerHide = {this.props.registerHide}
          registerSubmit = {this.props.registerSubmit}
          waiting = {this.props.registerIsWaiting}
          registerFailed = {this.props.registerFailed}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        //login
        loginIsVisible: state.login.visible,
        loginIsWaiting: state.login.waiting,
        loginFailed: state.login.failed,

        //register
        registerIsVisible: state.register.visible,
        registerIsWaiting: state.register.waiting,
        registerFailed: state.register.failed
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //login
        loginShow: () => dispatch(loginShow()),
        loginHide: () => dispatch(loginHide()),
        loginSubmit: (loginAttempt: Types.User) => dispatch(loginFetch(loginAttempt)),

        //register
        registerShow: () => dispatch(registerShow()),
        registerHide: () => dispatch(registerHide()),
        registerSubmit: (registerAttempt: Types.User) => dispatch(registerFetch(registerAttempt))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Main)