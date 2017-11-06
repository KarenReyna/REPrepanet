import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';
import { createAction } from 'Logic/actions';

import {
  Status,
  UserActions,
  CategoryActions,
  ResourceActions
} from 'Config/constants';

import { AdminView } from 'Presentational/components/adminView';
import { UpdateCategory } from 'Presentational/components/updateCategory';
import { UpdateResource } from 'Presentational/components/updateResource';
import { UpdateUser } from 'Presentational/components/updateUser';

class Admin extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadResources();
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        <AdminView
            updateUserShow = {this.props.updateUserShow}
            updateResourceShow = {this.props.updateResourceShow}
            updateCategoryShow = {this.props.updateCategoryShow}
            users = {this.props.users}
            resources = {this.props.resources}
            categories = {this.props.categories}
        />
        <UpdateUser 
            visible = {this.props.users.update.open}
            hide = {this.props.updateUserHide}
            submit = {this.props.updateUser}
            waiting = {this.props.users.status == Status.WaitingOnServer}
            failed = {this.props.users.status == Status.Failed}
            user = { this.props.users.update.object }
        />
        <UpdateCategory
            visible = {this.props.categories.update.open}
            hide = {this.props.updateCategoryHide}
            submit = {this.props.updateCategory}
            waiting = {this.props.categories.status == Status.WaitingOnServer}
            failed = {this.props.categories.status == Status.Failed}
            category = { this.props.categories.update.object }
        />
        <UpdateResource
            visible = {this.props.resources.update.open}
            hide = {this.props.updateResourceHide}
            submit = {this.props.updateResource}
            waiting = {this.props.resources.status == Status.WaitingOnServer}
            failed = {this.props.resources.status == Status.Failed}
            resource = { this.props.resources.update.object }
            categories =  { this.props.categories }
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
        loadCategories: () => dispatch(thunks.categories.all()),
        loadResources: () => dispatch(thunks.resources.all()),
        loadUsers: () => dispatch(thunks.users.all()),

        updateUser: (user) => dispatch(thunks.users.update(user)),
        updateCategory: (category) => dispatch(thunks.categories.update(category)),
        updateResource: (resource) => dispatch(thunks.resources.update(resource)),

        updateUserShow: (user) => dispatch(
          createAction(UserActions.Update, user, null, Status.WaitingOnUser)),
        updateUserHide: () => dispatch(
            createAction(UserActions.Update, null, null, Status.Ready)),

        updateCategoryShow: (category) => dispatch(
          createAction(CategoryActions.Update, category, null, Status.WaitingOnUser)),
        updateCategoryHide: () => dispatch(
            createAction(CategoryActions.Update, null, null, Status.Ready)),
        
        updateResourceShow: (resource) => dispatch(
          createAction(ResourceActions.Update, resource, null, Status.WaitingOnUser)),
        updateResourceHide: () => dispatch(
            createAction(ResourceActions.Update, null, null, Status.Ready)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)