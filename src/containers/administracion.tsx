import * as React from 'react';
import { connect } from 'react-redux';

import Administracion from '../components/administracion';
import { Register } from '../components/register';


import { registerOpen, registerClose} from '../actions';

import { registerFetch } from '../actions/thunks';
import * as Types from '../constants';

class AdministracionContainer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Administracion
          registerClicked = {this.props.registerOpen}
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
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      //register
      registerOpen: () => dispatch(registerOpen()),
      registerClose: () => dispatch(registerClose()),
      registerSubmit: (registerAttempt: Types.User) => dispatch(registerFetch(registerAttempt)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdministracionContainer)