import * as React from 'react';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import AddIcon from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';
import Container from 'Presentational/elements/Container';

function listElements(items, search) {
  search = search.toLowerCase();
  search = search.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");

  var filterByName = items.filter((item) => {
    item = item.name.toLowerCase();
    item = item.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u");
    return item.indexOf(search.toLowerCase()) !== -1; 
  });

  items = filterByName;
  
  return (
    <List dense={true}>
    {items.map(item => {
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
  )
}

export class CustomList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
    }
  }

  handleChange(newValue: string | undefined) {
    this.setState({
      search: newValue,
    });
  }
  public render() {
      if(this.props.items == null)
        return <p>Loading...</p>

      return (
        <div>
          <Container>
          <TextField
              label="Buscar"
              onChange={(e) =>
              this.handleChange(e.target.value)}
            />
            <br />
            <br />
          {listElements(this.props.items, this.state.search)}
          </Container>
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