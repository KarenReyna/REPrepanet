import * as React from 'react';
import { connect } from 'react-redux';
import Register from '../components/register';
import { registerShow, registerHide} from '../actions/register';
import { registerFetch, getUsersFetch } from '../actions/thunks';
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
        />
        <Register 
          visible = {this.props.registerIsOpen}
          registerHide = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          waiting = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
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
      users: state.users
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdministrationContainer)