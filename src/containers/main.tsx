import * as React from 'react';
import { connect } from 'react-redux';
import App from '../components/app';
import { example_action } from '../actions'

class Main extends React.Component<any, any> {
  render() {
    return (
      <App />
    );
  }
}

function mapStateToProps(state: any) {
    return {
        //TODO: Edit state to props
        example: state.example,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        //TODO: Edit dispatch to props
        example_dispatch: dispatch(example_action()),
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main)