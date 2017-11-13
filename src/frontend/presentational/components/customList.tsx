import * as React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import AddIcon from 'material-ui-icons/Add';

export class CustomList extends React.Component<any, any> {
  public render() {
      if(this.props.items == null)
        return <p>Loading...</p>

      return (
        <div>
          <List dense={true}>
            {this.props.items.map(item => {
              return (<ListItem
                        dense = {true}
                        key = {item._id}>
                          <ListItemText
                            primary={item.name}
                          />
                          <ListItemSecondaryAction>
                            <IconButton 
                              aria-label="Edit"
                              onClick={() => this.props.show(item)}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton 
                              aria-label="Delete"
                              onClick={() => this.props.delete(item)}>
                                <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                      </ListItem>)
            })}
        </List>
        <Button 
          fab 
          color="primary" 
          aria-label="Add"
          onClick={() => this.props.show(null)}>
            <AddIcon />
        </Button>
      </div>
      )
  }
}