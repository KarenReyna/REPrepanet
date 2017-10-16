import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { loginOpen, loginClose} from '../actions';
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
          loginClicked = {this.props.loginOpen}
          registerClicked = {this.props.registerOpen}
          administracionClicked = {this.props.administracionOpen}/> 
        <Login
          open = {this.props.loginIsOpen}
          loginClose = {this.props.loginClose}
          loginSubmit = {this.props.loginSubmit}
          loading = {this.props.loginLoading}
          loginFailed = {this.props.loginFailed}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        //login
        loginIsOpen: state.login.open,
        loginLoading: state.login.loading,
        loginFailed: state.login.failed,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //login
        loginOpen: () => dispatch(loginOpen()),
        loginClose: () => dispatch(loginClose()),
        loginSubmit: (loginAttempt: Types.User) => dispatch(loginFetch(loginAttempt)),
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)