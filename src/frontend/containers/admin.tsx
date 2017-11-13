import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';

import { User } from 'Config/constants';

import { AdminView } from 'Presentational/components/adminView';
import { isEmpty, hasRecentlyFailed } from 'Config/helper';

class Admin extends React.Component<any, any> {
    state = {
        admins: null,
        collabs: null
    }
    componentDidMount() {
        if(isEmpty(this.props.session.current)) {
            this.props.loadProfile();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.users.all != null &&
            nextProps.users.all != this.props.users.all) {
                let admins: User[] = [];
                let collabs: User[] = [];

                ((nextProps.users.all) as User[]).forEach(user => {
                    if(user.isAdmin) {
                        admins.push(user);
                    }
                    else {
                        collabs.push(user);
                    }
                });

                this.setState({
                    admins: admins,
                    collabs: collabs
                });
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.session.current != this.props.session.current) {
            this.props.loadUsers();
            this.props.loadCategories();
            this.props.loadResources();
        }
        if(hasRecentlyFailed(prevProps.session, this.props.session)) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>
                <AdminView
                    admins = { this.state.admins }
                    collabs = { this.state.collabs }
                    categories = { this.props.categories.all }
                    resources = { this.props.resources.all }
                />
            </div>);
    }
}

function mapStateToProps(state: any) {
    return {
        session: state.session,
        users: state.users,
        categories: state.categories,
        resources: state.resources
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        loadUsers: () => dispatch(thunks.users.all()),
        loadProfile: () => dispatch(thunks.session.profile()),
        loadCategories: () => dispatch(thunks.categories.all()),
        loadResources: () => dispatch(thunks.resources.all())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)