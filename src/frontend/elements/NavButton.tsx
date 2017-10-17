import * as React from 'react';
import Styles from '../style/elementStyles';

export default class NavButton extends React.Component<any, any> {
    static propTypes = {
        label: React.PropTypes.string.isRequired,
    }
    public render() {
      return(
        <button className={Styles.navButton.class} style={Styles.navButton.style} onClick={this.props.onClick}>{this.props.label}</button>
      );
  }
}