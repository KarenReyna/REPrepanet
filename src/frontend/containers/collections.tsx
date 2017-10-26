import * as React from 'react';
import { connect } from 'react-redux';
import { AddCollection } from '../components/addCollection';
import { addCollectionShow, addCollectionHide} from '../actions/collections';
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
          newCollection = {this.props.newCollection}
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
      newCollection: state.addCollection.newCollection, 
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      addCollectionOpen: () => dispatch(addCollectionShow()),
      addCollectionClose: () => dispatch(addCollectionHide()),
      addCollectionSubmit: (addCollectionAttempt: Types.Collection) => dispatch(addCollectionFetch(addCollectionAttempt)),
      getCollections: dispatch(getCollections()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectionsContainer)