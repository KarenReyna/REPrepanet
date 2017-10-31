import * as React from 'react';
import { connect } from 'react-redux';
import { AddCollection } from '../components/addCollection';
import { EditCollection } from '../components/editCollection';
import { addCollectionShow, addCollectionHide, editCollectionShow, editCollectionHide} from '../actions/collections';
import { addCollectionFetch, getCollections, modifyCollectionFetch, deleteCollectionFetch} from '../actions/thunks';
import Collections from '../components/collections';
import * as Types from '../constants';

class CollectionsContainer extends React.Component<any, any> {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCollections();
  }

  render() {
    return (
      <div>
        <Collections
          addCollectionClicked = {this.props.addCollectionOpen}
          editCollectionClicked = {this.props.editCollectionOpen}
          arrayCollections = {this.props.dataLoaded}
        />
        <AddCollection
          open = {this.props.addCollectionIsOpen}
          addCollectionClose = {this.props.addCollectionClose}
          addCollectionSubmit = {this.props.addCollectionSubmit}
        />
        <EditCollection 
          open = {this.props.editCollectionIsOpen}
          collectionData = {this.props.editCollectionData}
          editCollectionClose = {this.props.editCollectionClose}
          editCollectionSubmit = {this.props.editCollectionSubmit}
          deleteCollection = {this.props.deleteCollection}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    // Add Collection
    addCollectionIsOpen: state.addCollection.open,

    // Edit Collection
    editCollectionIsOpen: state.editCollection.open, 
    editCollectionData: state.editCollection.collection,
    
    // Load Collections
    dataLoaded: state.contentUser.data, 
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    // Add Collection
    addCollectionOpen: () => dispatch(addCollectionShow()),
    addCollectionClose: () => dispatch(addCollectionHide()),
    addCollectionSubmit: (addCollectionAttempt: Types.Collection) => dispatch(addCollectionFetch(addCollectionAttempt)),

    // Edit Collection
    editCollectionOpen: (collectionClicked: Types.CollectionFull) => dispatch(editCollectionShow(collectionClicked)),
    editCollectionClose: () => dispatch(editCollectionHide()),
    editCollectionSubmit: (editedCollection: Types.CollectionFull) => dispatch(modifyCollectionFetch(editedCollection)),

    // Delete Collection
    deleteCollection: (collection: Types.CollectionFull) => dispatch(deleteCollectionFetch(collection)), 

    // Get Collections
    loadCollections: () => dispatch(getCollections()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectionsContainer)