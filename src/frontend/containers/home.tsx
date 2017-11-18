import * as React from 'react';
import { connect } from 'react-redux';

import { Home } from 'Presentational/components/home';

import { thunks } from 'Logic/actions/thunks';

class Main extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadResources();
  }

  render() {
    return (
      <div>
        <Home 
          loginShow = {this.props.loginShow}
          users = {this.props.users}
          resources = {this.props.resources}
          categories = {this.props.categories}/>
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
        loadResources: () => dispatch(thunks.resources.all())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)