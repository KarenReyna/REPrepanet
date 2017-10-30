import * as React from 'react';
import { connect } from 'react-redux';
import Register from '../components/register';
import { NewResource } from '../components/newresource';
import { NewCategory } from '../components/newcategory';
import { registerShow, registerHide} from '../actions/register';
import { newResourceHide, newResourceShow} from '../actions/resources';
import { newCategoryShow, newCategoryHide} from '../actions/categories';
import { registerFetch, getUsersFetch, addNewResource, addNewCategory, getCategories, getResources } from '../actions/thunks';
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
    this.props.getCategories();
    this.props.getResources();
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
          newResourceShow = {this.props.newResourceShow}
          newCategoryShow = {this.props.newCategoryShow}
          getUsers = {this.props.loadUsers}
          userArray = {this.props.users}
        />
        <Register 
          visible = {this.props.registerIsOpen}
          registerHide = {this.props.registerClose}
          registerSubmit = {this.props.registerSubmit}
          waiting = {this.props.registerLoading}
          registerFailed = {this.props.registerFailed}/>
        <NewCategory
          visible = {this.props.newCategoryIsVisible}
          newCategoryHide = {this.props.newCategoryHide}
          failed = {this.props.newCategoryFailed}
          submit = {this.props.addNewCategory}/>
        <NewResource
          visible = {this.props.newResourceIsVisible}
          newResourceHide = {this.props.newResourceHide}
          categories = {this.props.categories}
          submit = {this.props.addNewResource}
          tags = {this.props.tags}/>
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

      // new resource
      newResourceIsVisible: state.newResource.visible,

      // new category
      newCategoryIsVisible: state.newCategory.visible,
      newCategoryFailed: state.newCategory.failed,

      categories: state.categories,

      // tags
      tags: state.tags
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

      // new resouce
      newResourceShow: () => dispatch(newResourceShow()),
      newResourceHide: () => dispatch(newResourceHide()),
      addNewResource: (resourceAttempt: Types.Resource) => dispatch(addNewResource(resourceAttempt)),

      // new category
      newCategoryShow: () => dispatch(newCategoryShow()),
      newCategoryHide: () => dispatch(newCategoryHide()),
      addNewCategory: (categoryAttempt: Types.Category) => dispatch(addNewCategory(categoryAttempt)),

      getCategories: () => dispatch(getCategories()), 
      getResources: () => dispatch(getResources()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdministrationContainer)