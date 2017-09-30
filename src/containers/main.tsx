import * as React from 'react';
import { connect } from 'react-redux';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { openLogin, closeLogin } from '../actions';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Home loginClicked = {this.props.openLogin}/>
        <Login open = {this.props.loginIsOpen} loginClose = {this.props.closeLogin} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        //TODO: Edit state to props
        loginIsOpen: state.login.open,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //TODO: Edit dispatch to props
        openLogin: () => dispatch(openLogin()),
        closeLogin: () => dispatch(closeLogin())
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)