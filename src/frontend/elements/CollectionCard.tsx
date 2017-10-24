import * as React from 'react';
import Styles from '../style/elementStyles';
// import PropTypes from 'prop-types';

export default class CollectionCard extends React.Component<any, any> {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    // }
    public render() {
      return(
        <div className={Styles.collectionCardHead.class} style={Styles.collectionCardHead.style}>
            <div className={Styles.collectionCardBody.class}>
                <a className={Styles.collectionCardText.class}>{this.props.title}</a>
            </div>
       </div>
      );
  }
}