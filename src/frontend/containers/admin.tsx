import * as React from 'react';
import { connect } from 'react-redux';

import { thunks } from 'Logic/actions/thunks';
import { createAction } from 'Logic/actions';

import { isEmpty } from 'Config/helper';

import {
  Status,
  UserActions,
  CategoryActions,
  ResourceActions,
  LoginAttempt
} from 'Config/constants';

// import { AdminView } from 'Presentational/components/adminView';
// import { UpdateCategory } from 'Presentational/components/updateCategory';
// import { UpdateResource } from 'Presentational/components/updateResource';
// import { UpdateUser } from 'Presentational/components/updateUser';
import { Login } from 'Presentational/components/login';

class Admin extends React.Component<any, any> {
    adminViews = <div></div>
    componentWillReceiveProps(nextProps) {
        if(!isEmpty(nextProps.users.current) && 
            nextProps.users.current._id != this.props.users.current._id) {
            this.props.loadCategories();
            this.props.loadResources();
            this.props.loadUsers();
        }
        // if(!isEmpty(nextProps.users.all) 
        //     && nextProps.users.all.length != this.props.users.all.length)
        //     userUpdateView = <UpdateUser 
        //                             visible = {this.props.users.update.open}
        //                             hide = {this.props.updateUserHide}
        //                             submit = {this.props.updateUser}
        //                             waiting = {this.props.users.status == Status.WaitingOnServer}
        //                             failed = {this.props.users.status == Status.Failed}
        //                             user = { this.props.users.update.object }
        //                         />

        // if(!isEmpty(nextProps.users.all) && 
        //     !isEmpty(nextProps.resources.all) && 
        //     !isEmpty(nextProps.categories.all))
        //     this.adminViews = (<div>
        //         <AdminView
        //             updateUserShow = {this.props.updateUserShow}
        //             updateResourceShow = {this.props.updateResourceShow}
        //             updateCategoryShow = {this.props.updateCategoryShow}
        //             users = {this.props.users}
        //             resources = {this.props.resources}
        //             categories = {this.props.categories}
        //         /> 
                
        //         <UpdateCategory
        //             visible = {this.props.categories.update.open}
        //             hide = {this.props.updateCategoryHide}
        //             submit = {this.props.updateCategory}
        //             waiting = {this.props.categories.status == Status.WaitingOnServer}
        //             failed = {this.props.categories.status == Status.Failed}
        //             category = { this.props.categories.update.object }
        //         /> 
        //         <UpdateResource
        //             visible = {this.props.resources.update.open}
        //             hide = {this.props.updateResourceHide}
        //             submit = {this.props.updateResource}
        //             waiting = {this.props.resources.status == Status.WaitingOnServer}
        //             failed = {this.props.resources.status == Status.Failed}
        //             resource = { this.props.resources.update.object }
        //             categories =  { this.props.categories }
        //         />
        //     </div>)
    }

  render() {
    return (
      <div>
        {this.adminViews}
        <Login
            visible = {this.props.users.login.open}
            hide = {this.props.loginHide}
            submit = {this.props.loginSubmit}
            waiting = {this.props.users.status == 
                                    Status.WaitingOnServer}
            failed = {this.props.users.error && 
                    this.props.users.error.status && 
                    this.props.users.error.status == 400}
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

        loginSubmit: (loginAttempt: LoginAttempt) => 
            dispatch(thunks.users.login(loginAttempt)),
        loginHide: () => dispatch(
            createAction(UserActions.Login, null, null, Status.Ready)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)