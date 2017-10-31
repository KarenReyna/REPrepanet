import * as React from 'react';
import { connect } from 'react-redux';
import { Register } from '../components/register';
import { DeleteUser } from '../components/deleteUser';
import { registerShow, registerHide} from '../actions/register';
import { deleteUserShow, deleteUserHide} from '../actions/deleteUser';

import { registerFetch, getUsersFetch, deleteUserFetch } from '../actions/thunks';
import * as Types from '../constants';
import Administration from '../components/administration';

class AdministrationContainer extends React.Component<any, any> {
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
    if(nextProps.users && nextProps.users[0])
      this.setState({loading: false});
  }

  render() {
    return (
      <div>
        <Administration
          registerClicked = {this.props.registerOpen}
          getData = {this.props.loadUsers}
          dataArray = {this.props.users}
          deleteUserClicked = {this.props.deleteUserOpen}
          deleteUser = {this.props.deleteUser}
        />
        <Register 
          visible = {this.props.registerIsOpen}
          registerHide = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          waiting = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
        <DeleteUser 
          visible = {this.props.deleteUserIsOpen}
          deleteUserHide = {this.props.deleteUserClose}
          deleteUserSubmit = {this.props.deleteUserSubmit}
          waiting = {this.props.deleteUserLoading}
          deleteUserFailed = {this.props.deleteUserFailed}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      //register
      registerIsOpen: state.register.visible,
      registerLoading: state.register.waiting,
      registerFailed: state.register.failed,

      // users
      users: state.users,

      //delete user
      deleteUserIsOpen: state.deleteUser.visible,
      deleteUserLoading: state.deleteUser.waiting,
      deleteUserFailed: state.deleteUser.failed,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      //register
      registerOpen: () => dispatch(registerShow()),
      registerClose: () => dispatch(registerHide()),
      registerSubmit: (registerAttempt: Types.User) => dispatch(registerFetch(registerAttempt)),

      // get users
      loadUsers: () => dispatch(getUsersFetch()),

      //delete user
      deleteUserOpen: () => dispatch(deleteUserShow()),
      deleteUserClose: () => dispatch(deleteUserHide()),
      deleteUserSubmit: (deleteUserAttempt: Types.User) => dispatch(deleteUserFetch(deleteUserAttempt)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdministrationContainer)