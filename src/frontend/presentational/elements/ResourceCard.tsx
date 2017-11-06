import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';
// import PropTypes from 'prop-types';

export default class ResourceCard extends React.Component<any, any> {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     subtitle: PropTypes.string.isRequired,
    // }
    public render() {
      return(
        <div className={Styles.resourceCardHead.class} style={Styles.resourceCardHead.style}>
            <div className={Styles.resourceCardBody.class}>
                <a className={Styles.resourceCardText.class}>{this.props.title}</a>
                <p>{this.props.subtitle}</p>
            </div>
        </div>
      );
  }
}