import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { loginShow, loginHide } from '../actions/login';
import { loginFetch} from '../actions/thunks';
import * as Types from '../constants';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Home 
          loginShow = {this.props.loginShow}/>
        <Login
          visible = {this.props.loginIsVisible}
          loginHide = {this.props.loginHide}
          loginSubmit = {this.props.loginSubmit}
          waiting = {this.props.loginIsWaiting}
          loginFailed = {this.props.loginFailed}/>
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
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //login
        loginShow: () => dispatch(loginShow()),
        loginHide: () => dispatch(loginHide()),
        loginSubmit: (loginAttempt: Types.User) => dispatch(loginFetch(loginAttempt)),
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)