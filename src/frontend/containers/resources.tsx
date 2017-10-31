import * as React from 'react';
import { connect } from 'react-redux';
import Resources from '../components/resources';
import { ResourceDialog } from '../components/resourceDialog';
import { getCategories, getResources, deleteResource } from '../actions/thunks';
import { resourceDialogHide, resourceDialogShow} from '../actions/resources';
// import * as Types from '../constants';

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
          editResource = {this.props.resourceDialogShow}
          deleteResource = {this.props.deleteResource}
        />
        <ResourceDialog
          resource = {{ _id: '' }}
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
    categories: state.categories,
    resources: state.resources,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    getCategories: () => dispatch(getCategories()), 
    getResources: () => dispatch(getResources()),

    resourceDialogShow: () => dispatch(resourceDialogShow()),
    resourceDialogHide: () => dispatch(resourceDialogHide()),

    deleteResource: (id: string) => dispatch(deleteResource(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ResourcesContainer)