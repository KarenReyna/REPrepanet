import * as React from 'react';
import Content from '../elements/Content'
import List from '../elements/List';

const resourcesList = [
  {
    key: 1,
    title: 'Recurso 1',
  },
  {
    key: 2, 
    title: 'Recurso 2',
  },
  {
    key: 3, 
    title: 'Recurso 3',
  },
  {
    key: 4, 
    title: 'Recurso 4',
  },
  {
    key: 5, 
    title: 'Recurso 5',
  },
];

export default class Resources extends React.Component<any, any> {
  public render() {
      return(
        <Content style="rightContent">
          <br />
          <div>
            <input className="uk-input" type="text" placeholder="Buscar"></input>
          </div>
          <br />
          <List>
            {resourcesList.map((resource) => (
              <li key={resource.key}>
                <a>{resource.title}</a>
              </li>
            ))}
          </List>
        </Content>);
  }
}