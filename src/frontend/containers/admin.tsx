import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';
import { createAction } from 'Logic/actions';

import {
  Status,
  CategoryActions
} from 'Config/constants';

import { AdminView } from 'Presentational/components/adminView';
import { UpdateCategory } from 'Presentational/components/updateCategory';
import { isEmpty, isRecentlyReady, hasRecentlyFailed } from 'Config/helper';

class Admin extends React.Component<any, any> {
    componentDidMount() {
        if(isEmpty(this.props.session.current)) {
            this.props.loadProfile();
        }
    }

    componentDidUpdate(prevProps) {
        if(isRecentlyReady(prevProps.session, this.props.session)) {
            this.props.loadCategories();
        }
        if(hasRecentlyFailed(prevProps.session, this.props.session)) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (<div>
                    <AdminView
                            updateCategoryShow = {this.props.updateCategoryShow}
                            categories = {this.props.categories}
                        /> 

                        <UpdateCategory
                            visible = {this.props.categories.update.open}
                            hide = {this.props.updateCategoryHide}
                            submit = {this.props.updateCategory}
                            waiting = {this.props.categories.status == Status.WaitingOnServer}
                            failed = {this.props.categories.status == Status.Failed}
                            category = { this.props.categories.update.object }
                        />
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
        loadCategories: () => dispatch(thunks.categories.all()),
        loadProfile: () => dispatch(thunks.session.profile()),

        updateCategory: (category) => dispatch(thunks.categories.update(category)),

        updateCategoryShow: (category) => dispatch(
          createAction(CategoryActions.Update, category, null, Status.WaitingOnUser)),
        updateCategoryHide: () => dispatch(
            createAction(CategoryActions.Update, null, null, Status.Ready))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)