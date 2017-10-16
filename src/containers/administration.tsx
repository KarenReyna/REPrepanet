import * as React from 'react';
import { connect } from 'react-redux';
import { Register } from '../components/register';
import { registerOpen, registerClose} from '../actions';
import { registerFetch, usersFetch } from '../actions/thunks';
import * as Types from '../constants';
import Administration from '../components/administration';

class AdministracionContainer extends React.Component<any, any> {
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
    //console.log(this.props.users[0].email);
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
          open = {this.props.registerIsOpen}
          registerClose = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          loading = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      //register
      registerIsOpen: state.register.open,
      registerLoading: state.register.loading,
      registerFailed: state.register.failed,

      // users
      users: state.users
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      //register
      registerOpen: () => dispatch(registerOpen()),
      registerClose: () => dispatch(registerClose()),
      registerSubmit: (registerAttempt: Types.User) => dispatch(registerFetch(registerAttempt)),

      // get users
      loadUsers: () => dispatch(usersFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdministracionContainer)