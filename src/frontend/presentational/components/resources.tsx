import * as React from 'react';
import Content from '../elements/Content';
import List, { 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction 
} from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { Category, Resource } from 'Config/constants';

export default class Resources extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      tab: (this.props.categories as Category[])[0].name
    };
  }

  handleChange = (event) => {
    this.setState({
      tab: event.target.innerText,
    });
  };

  handleChangeIndex = index => {
    this.setState({ tab: index });
  };

  tabs(categories) {
    return categories.map((category) => (
      (category.name && category.name != '') &&
      <Tab
        label={category.name}
        value={category.name}
        key={category._id}>
      </Tab>
    ))
  }

  tabContainers(categories) {
    var resources = this.props.resources as Resource[]
    return categories.map((category) => (
      (category.name && category.name != '') &&
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
      )
    )
  }

  public render() {
    var categories = this.props.categories as Category[];
    if (categories == null) {
      return(
        <Content style="rightContent">
          <br/>
          No categories exist
        </Content>
      );
    }

    return(
      <div>
        <Tabs
          value={this.state.tab}
          onChange={(e) => this.handleChange(e)}>
            {this.tabs(this.props.categories)}
        </Tabs>
        <SwipeableViews
        axis='x'
        index={this.state.value}
        onChangeIndex={this.handleChangeIndex}
        >
        {this.tabContainers(this.props.categories)}
        </SwipeableViews>
      </div>
    );
  }
}