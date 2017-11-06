import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';
// import PropTypes from 'prop-types';

export default class NavButton extends React.Component<any, any> {
    // static propTypes = {
    //     label: PropTypes.string.isRequired,
    // }
    public render() {
      return(
        <button className={Styles.navButton.class} style={Styles.navButton.style} onClick={this.props.onClick}>{this.props.label}</button>
      );
  }
}