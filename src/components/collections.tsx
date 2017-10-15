import * as React from 'react';
import Content from '../elements/Content'
import Button from '../elements/Button';
import List from '../elements/List';

const collectionsList = [
  {
    key: 1,
    title: 'Colección 1',
  },
  {
    key: 2, 
    title: 'Colección 2',
  },
];

export default class Collections extends React.Component<any, any> {
  public render() {
      return(
        <Content style="rigthContent">
          <br />
          <Button label="Añadir colección" />
          <br />
          <List>
            {collectionsList.map((collection) => (
              <li key={collection.key}>
                <a href='#'>{collection.title}</a>
              </li>
            ))}
        </List>
    </Content>);
  }
}