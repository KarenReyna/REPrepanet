import * as React from 'react';
import Styles from '../style/elementStyles';

export default class Button extends React.Component<any, any> {
    static propTypes = {
        label: React.PropTypes.string.isRequired,
    }
    public render() {
      return(
        <p>
            <button className={Styles.button.class} style={this.props.style} onClick={this.props.onClick}>{this.props.label}</button>
        </p>
      );
  }
}
