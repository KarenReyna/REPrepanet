import * as React from 'react';
import { connect } from 'react-redux';
import Resources from '../components/resources';
/*import * as Types from '../constants';*/

class ResourcesContainer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Resources
          registerClicked = {this.props.registerOpen}
        />
      </div>
    );
  }
}

function mapStateToProps(/*state: any*/) {
  return {
  }
}

function mapDispatchToProps(/*dispatch: any*/) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ResourcesContainer)