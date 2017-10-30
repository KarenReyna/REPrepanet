import * as React from 'react';
import Content from '../elements/Content'
import List from '../elements/List';
import Button from '../elements/Button';
import { Tabs, Tab } from 'material-ui/Tabs';
import * as Types from '../constants';

export default class Resources extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      tab: '',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  tabs(categories) {
    var resources = this.props.resources as Types.Resource[]
    return categories.map((category) => (
      <Tab
        label={category.name}
        value={category._id}>
        <List>
            {resources.map((resource) => (
              resource.category._id == category._id ? (
              <li key={resource.name}>
                <a>{resource.name}</a>
                <Button
                  label = "Editar"/>
                <Button
                  label = "Borrar"/>
              </li>):(<div></div>)
            ))}
          </List>
      </Tab>
    ));
  }

  public render() {
    var categories = this.props.categories as Types.Category[];
    if (categories == null) {
      return(
        <Content style="rightContent">
          <br/>
          No categories exist
        </Content>
      );
    }

    return(
      <Content style="rightContent">
        <Tabs
        value={this.state.tab}
        onChange={this.handleChange}>
          {this.tabs(this.props.categories)}
        </Tabs>
      </Content>
    );
  }
}