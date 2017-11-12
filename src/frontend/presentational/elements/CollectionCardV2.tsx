import * as React from 'react';
import Styles from 'Presentational/style/elementStyles';

export default class CollectionCardV2 extends React.Component<any, any> {
    public render() {
      return(
        <div>
            <h3>{this.props.title}</h3>
            
            {(() => {
                if(this.props.resources.all != null && this.props.resources.all.length > 0){
                    return (
                        this.props.resources.all.filter(({category}) => category.name === this.props.title)
                        .map((resource2) => (
                            <div className={Styles.collectionCardHead.class} style={Styles.collectionCardHead.style}>
                                <div className={Styles.collectionCardBody.class}>
                                    <a className={Styles.collectionCardText.class}>{resource2.title}</a>
                                </div>
                            </div>
                        ))
                    );
                }
            })()}
            
        </div>
      );

  }
}