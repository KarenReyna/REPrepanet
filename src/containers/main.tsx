import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { loginOpen, loginClose } from '../actions';
import { loginFetch } from '../actions/thunks';
import * as Types from '../constants';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Home loginClicked = {this.props.loginOpen}/>
        <Login
          open = {this.props.loginIsOpen}
          loginClose = {this.props.loginClose}
          loginSubmit = {this.props.loginSubmit}
          loading = {this.props.loginLoading}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        //TODO: Edit state to props
        loginIsOpen: state.login.open,
        loginLoading: state.login.loading
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //TODO: Edit dispatch to props
        loginOpen: () => dispatch(loginOpen()),
        loginClose: () => dispatch(loginClose()),
        loginSubmit: (loginAttempt: Types.User) => dispatch(loginFetch(loginAttempt))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)