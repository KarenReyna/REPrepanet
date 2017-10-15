import * as React from 'react';
import { connect } from 'react-redux';
import { AddCollection } from '../components/addCollection';
import { addCollectionOpen, addCollectionClose} from '../actions';
import { addCollectionFetch } from '../actions/thunks';
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
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      //register
      addCollectionOpen: () => dispatch(addCollectionOpen()),
      addCollectionClose: () => dispatch(addCollectionClose()),
      addCollectionSubmit: (addCollectionAttempt: Types.Collection) => dispatch(addCollectionFetch(addCollectionAttempt)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CollectionsContainer)