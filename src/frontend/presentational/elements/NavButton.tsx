import * as React from 'react';
// import Styles from 'Presentational/style/elementStyles';

export default class NavButton extends React.Component<any, any> {

    public render() {
      return(
        <button 
          /* className={Styles.navButton.class} 
          style={Styles.navButton.style}  */
          onClick={this.props.onClick}>
          {this.props.label}
        </button>
      );
  }
}