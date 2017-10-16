import * as React from 'react';
import Content from '../elements/Content'
import Button from '../elements/Button';
import List from '../elements/List';

export default class Collections extends React.Component<any, any> {
  public render() {
      var data = this.props.dataArray;
      if(data == null) {
        data = [{_id: 0, name: '', description: '',},];
      }
      return(
        <Content style="rigthContent">
          <br />
          <Button label="Añadir colección" onClick={this.props.addCollectionClicked}/>
          <br />
          <List>
            {data.map((collection) => (
              <li key={collection._id}>
                <a href='#'>{collection.name}</a>
                <p>{collection.description}</p>
              </li>
            ))}
        </List>
    </Content>);
  }
}