import * as React from 'react';
import { connect } from 'react-redux';
import Resources from '../components/resources';
import { getCategories, getResources } from '../actions/thunks';
/*import * as Types from '../constants';*/

class ResourcesContainer extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getResources();
  }

  render() {
    return (
      <div>
        <Resources
          categories = {this.props.categories}
          resources = {this.props.resources}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    categories: state.categories,
    resources: state.resources,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    getCategories: () => dispatch(getCategories()), 
    getResources: () => dispatch(getResources()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ResourcesContainer)