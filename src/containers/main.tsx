import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { Register } from '../components/register';
import { Create } from '../components/create';
import { loginOpen, loginClose, registerOpen, registerClose, openCreate, closeCreate } from '../actions';
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
          loginClicked = {this.props.loginOpen}
          registerClicked = {this.props.registerOpen}
          createClicked = {this.props.openCreate}/>
        <Login
          open = {this.props.loginIsOpen}
          loginClose = {this.props.loginClose}
          loginSubmit = {this.props.loginSubmit}
          loading = {this.props.loginLoading}
          loginFailed = {this.props.loginFailed}/>
        <Register
          open = {this.props.registerIsOpen}
          registerClose = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          loading = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
        <Create 
          open = {this.props.createIsOpen} 
          closeCreate = {this.props.closeCreate} />
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

        //register
        registerIsOpen: state.register.open,
        registerLoading: state.register.loading,
        registerFailed: state.register.failed,

        // create item
        createIsOpen: state.create.open,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //login
        loginOpen: () => dispatch(loginOpen()),
        loginClose: () => dispatch(loginClose()),
        loginSubmit: (loginAttempt: Types.User) => dispatch(loginFetch(loginAttempt)),

        //register
        registerOpen: () => dispatch(registerOpen()),
        registerClose: () => dispatch(registerClose()),
        registerSubmit: (registerAttempt: Types.User) => dispatch(registerFetch(registerAttempt)),

        // create item
        openCreate: () => dispatch(openCreate()),
        closeCreate: () => dispatch(closeCreate()),
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)