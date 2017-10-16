import * as React from 'react';
import { connect } from 'react-redux';
import { AddCollection } from '../components/addCollection';
import { addCollectionOpen, addCollectionClose} from '../actions';
import { addCollectionFetch, getCollections} from '../actions/thunks';
import Collections from '../components/collections';
import * as Types from '../constants';

class CollectionsContainer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Collections
          addCollectionClicked = {this.props.addCollectionOpen}
          getData = {this.props.getCollections}
          dataArray = {this.props.dataLoaded}
        />
        <AddCollection
          open = {this.props.addCollectionIsOpen}
          addCollectionClose = {this.props.addCollectionClose}
          addCollectionSubmit = {this.props.addCollectionSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
      addCollectionIsOpen: state.addCollection.open,
      dataLoaded: state.contentUser.data,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      addCollectionOpen: () => dispatch(addCollectionOpen()),
      addCollectionClose: () => dispatch(addCollectionClose()),
      addCollectionSubmit: (addCollectionAttempt: Types.Collection) => dispatch(addCollectionFetch(addCollectionAttempt)),
      getCollections: dispatch(getCollections()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectionsContainer)