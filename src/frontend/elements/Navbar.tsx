import * as React from 'react';
import Styles from '../style/elementStyles';

export default class Navbar extends React.Component<any, any> {
    public render() {
      return(
          <div style={Styles.navbar.container.style}>
            <div className={Styles.navbar.navbar.class} style={Styles.navbar.navbar.style}>
                <a className={Styles.navbar.logo.class} style={Styles.navbar.logo.style}>{this.props.title}</a>
                {this.props.children}
            </div>
          </div>
      );
  }
}