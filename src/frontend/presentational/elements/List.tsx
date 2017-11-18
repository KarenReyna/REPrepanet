import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';

export default class List extends React.Component<any, any> {
    public render() {
      return(
        <ul className={Styles.list.class}>
            {this.props.children}
        </ul>
      );
  }
}