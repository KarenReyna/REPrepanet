import * as React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

export class CustomList extends React.Component<any, any> {
  public render() {
      if(this.props.items == null)
        return <p>Loading...</p>

      return (
        <List dense={true}>
          {this.props.items.map(items => {
            return (<ListItem
                      dense = {true}
                      key = {items._id}>
                        <ListItemText
                          primary={items.name}
                        />
                        <ListItemSecondaryAction>
                          <IconButton aria-label="Edit">
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label="Delete">
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)
          })}
      </List>
      )
  }
}