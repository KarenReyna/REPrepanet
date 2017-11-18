import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';

export default class Navbar extends React.Component<any, any> {
    public render() {
      return(
          <div style={Styles.navbar.container.style}>
            <div 
                className={Styles.navbar.navbar.class} 
                style={Styles.navbar.navbar.style}>
                <a 
                    className={Styles.navbar.logo.class} 
                    style={Styles.navbar.logo.style}>
                    <img src={'/src/frontend/presentational/assets/logo.svg'}/>
                </a>
                {/* {this.props.children} */}
            </div>
          </div>
      );
  }
}