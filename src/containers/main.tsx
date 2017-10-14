import * as React from 'react';
import { connect } from 'react-redux';

import { Home } from '../components/home';
import { Login } from '../components/login';

import { Register } from '../components/register';
import { loginOpen, loginClose, registerOpen, registerClose } from '../actions';
import { loginFetch, registerFetch, usersFetch } from '../actions/thunks';

import * as Types from '../constants';

class Main extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.users && nextProps.users[0])
      this.setState({loading: false});
  }

  render() {
    if(this.state.loading) {
      return <p>Loading...</p>
    }
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

        <Register
          open = {this.props.registerIsOpen}
          registerClose = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          loading = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
        <p>{this.props.users[0].email}</p>
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

        //users
        users: state.users
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

        //get users
        loadUsers: () => dispatch(usersFetch())
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)