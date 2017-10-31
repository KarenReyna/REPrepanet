import * as React from 'react';
import Content from '../elements/Content'
// import List from '../elements/List';
import List, { 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction 
} from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Tabs, { Tab } from 'material-ui/Tabs';
import * as Types from '../constants';

export default class Resources extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      tab: (this.props.categories as Types.Category[])[0].name,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.innerText,
    });
  };

  tabs(categories) {
    var resources = this.props.resources as Types.Resource[]
    return categories.map((category) => (
      (category.name && category.name != '') &&
      <Tab
        label={category.name}
        value={category.name}
        key={category._id}>
        <List key={category._id}>
          {resources.map((resource) => (
            <ListItem button key = {resource._id}>
              <ListItemText
                primary={resource.name}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete" 
                  onClick={() => this.props.deleteResource(resource._id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit" 
                  onClick={() => this.props.editResource(resource)}>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Tab>
    ))
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
        onChange={(e) => this.handleChange(e)}>
          {this.tabs(this.props.categories)}
        </Tabs>
      </Content>
    );
  }
}