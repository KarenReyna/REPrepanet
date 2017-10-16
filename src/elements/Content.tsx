import * as React from 'react';
import Styles from '../style/elementStyles';

export default class Content extends React.Component<any, any> {
    public render() {
      return(
        <div style={Styles[this.props.style].style}>
            {this.props.children}
        </div>
      );
  }
}