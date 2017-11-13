import * as React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';

export class UserList extends React.Component<any, any> {
  public render() {
      return (
        <List dense={true}>
          {this.props.users.all.map(user => {
            <ListItem button dense={true}>
            <ListItemText
              primary={user.name}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit">
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          })}
      </List>
      )
  }
}