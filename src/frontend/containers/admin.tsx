import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';
import { createAction } from 'Logic/actions';

import {
  Status,
  UserActions
} from 'Config/constants';

import { AdminView } from 'Presentational/components/adminView';
import { UpdateUser } from 'Presentational/components/updateUser';
import { isEmpty, hasRecentlyFailed } from 'Config/helper';

class Admin extends React.Component<any, any> {
    state = {view: <div></div>};
    componentDidMount() {
        if(isEmpty(this.props.session.current)) {
            this.props.loadProfile();
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.session.current != this.props.session.current) {
            this.props.loadUsers();
        }
        if(hasRecentlyFailed(prevProps.session, this.props.session)) {
            this.props.history.push('/login');
        }
        if(prevProps.users.all == null && this.props.users.all != null) {
            this.setState({view: <div>
                    <AdminView
                        updateUserShow = {this.props.updateUserShow}
                        users = {this.props.users}
                    />

                    <UpdateUser
                        visible = {this.props.users.update.open}
                        hide = {this.props.updateUserHide}
                        submit = {this.props.updateUser}
                        waiting = {this.props.users.status == Status.WaitingOnServer}
                        failed = {this.props.users.status == Status.Failed}
                        user = { this.props.users.update.object }
                    />
            </div>});
        }
    }

    render() {
        return (
            <div>
                { this.state.view }
            </div>);
    }
}

function mapStateToProps(state: any) {
    return {
        session: state.session,
        users: state.users,
        resources: state.resources,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        loadUsers: () => dispatch(thunks.users.all()),
        loadProfile: () => dispatch(thunks.session.profile()),

        updateUser: (user) => dispatch(thunks.categories.update(user)),

        updateUserShow: (user) => dispatch(
          createAction(UserActions.Update, user, null, Status.WaitingOnUser)),
        updateUserHide: () => dispatch(
            createAction(UserActions.Update, null, null, Status.Ready))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)