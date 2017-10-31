import * as React from 'react';
import Content from '../elements/Content'
import Button from '../elements/Button';
import List from '../elements/List';
import * as Types from '../constants';

export default class Collections extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataCollections: [],
    };
  }

  public render() {
      var arrayCollections = this.props.arrayCollections;
      
      if (arrayCollections == null) {
        arrayCollections = [];
      }

      return(
        <Content style="rigthContent">
          <br />
          <Button label="Añadir colección" onClick={this.props.addCollectionClicked}/>
          <br />
          <List>
            {arrayCollections.map((collection) => {
              let collectionClicked = this.props.editCollectionClicked.bind(this, collection as Types.CollectionFull);

              return (
                <li key={collection._id}>
                  <a onClick={collectionClicked}>{collection.name}</a>
                  <p>{collection.description}</p>
                </li>
              )
            })}
        </List>
    </Content>);
  }
}
