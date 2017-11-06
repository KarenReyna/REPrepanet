import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';

export default class Menu extends React.Component<any, any> {
    public render() {
      return(
        <div className={Styles.menu.container.class}>
            <ul className={Styles.menu.list.class}>
                {this.props.children}
            </ul>
        </div>
    );
  }
}