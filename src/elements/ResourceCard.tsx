import * as React from 'react';
import Styles from '../style/elementStyles';

export default class ResourceCard extends React.Component<any, any> {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        subtitle: React.PropTypes.string.isRequired,
    }
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