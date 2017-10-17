import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/user';
import { administrationShow, collectionsShow, resourcesShow} from '../actions/menu';

class UsersContainer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <User 
          administrationClicked = {this.props.administrationOpen}
          collectionsClicked = {this.props.collectionsOpen}
          resourcesClicked = {this.props.resourcesOpen}
          content = {this.props.showContent}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      showContent: state.contentUser.content,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      administrationOpen: () => dispatch(administrationShow()),
      collectionsOpen: () => dispatch(collectionsShow()),
      resourcesOpen: () => dispatch(resourcesShow()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer)