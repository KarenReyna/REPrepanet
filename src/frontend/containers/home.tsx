import * as React from 'react';
import { connect } from 'react-redux';

import { Home } from 'Presentational/components/home';
import { Login } from 'Presentational/components/login';

import { thunks } from 'Logic/actions/thunks';
import { createAction } from 'Logic/actions';

import {
  LoginAttempt, 
  Status, 
  UserActions
 } from 'Config/constants';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadResources();
  }

  render() {
    return (
      <div>
        <Home 
          loginShow = {this.props.loginShow}
          users = {this.props.users}
          resources = {this.props.resources}
          categories = {this.props.categories}/>
        <Login
          visible = {this.props.users.login.open}
          hide = {this.props.loginHide}
          submit = {this.props.loginSubmit}
          waiting = {this.props.users.status == Status.WaitingOnServer}
          failed = {this.props.users.status == Status.Failed}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        users: state.users,
        resources: state.resources,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        loginSubmit: (loginAttempt: LoginAttempt) => 
            dispatch(thunks.users.login(loginAttempt)),
        loginShow: () => dispatch(
            createAction(UserActions.Login, null, null, Status.WaitingOnUser)),
        loginHide: () => dispatch(
            createAction(UserActions.Login, null, null, Status.Ready)),
        loadCategories: () => dispatch(thunks.categories.all()),
        loadResources: () => dispatch(thunks.resources.all())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)