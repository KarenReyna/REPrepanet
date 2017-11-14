import * as React from 'react';
import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { LinearProgress } from 'material-ui/Progress';
import { Category } from 'Config/constants';
import { 
  isEmpty,
  containsOnly
} from 'Config/helper';

export class UpdateCategory extends React.Component<any, any> {
  state = {
    category: {
      name: '',
      description: ''
    } as Category,
    editing: false
  };

  componentWillReceiveProps(nextProps) {
    if(!isEmpty(nextProps.object)) {
      console.log(containsOnly(nextProps.object));
      if(containsOnly(nextProps.object) && !nextProps.failed && !nextProps.waiting) {
        this.setState({
          category: {
            name: '',
            description: ''
          } as Category,
          editing: false
        });
      }

      else if(!nextProps.failed && !nextProps.waiting) {
        this.setState({
          category: {
            name: nextProps.object.name,
            description: nextProps.object.description
          } as Category,
          editing: true
        });
      }
    }
  }

  public render() {
    var handleChange = (name) => e => {
        this.setState({
          category: { 
            ...this.state.category,
            [name]: e.target.value 
          }
        });
    };

    var handleSubmit = () => {
      let category = this.state.category
      if(this.state.editing) {
        category._id = this.props.object._id;
      }
      this.props.submit(category, this.state.editing);
    }

    var title = this.state.editing? 'Editar Categoría' : 'Registrar Categoría';

    return (
        <Dialog 
          open = {this.props.visible}
          onRequestClose={this.props.hide}>
            <DialogTitle>{title}</DialogTitle>
              <DialogContent>

              <TextField
                  label="Nombre"
                  value={this.state.category.name}
                  onChange={handleChange('name')}
              /><br />

              <TextField
                label="Descripción"
                value={this.state.category.description}
                rows={2}
                multiline={true}
                onChange={handleChange('description')}
              /><br />

              {this.props.failed && <p>La categoría ya existe</p>}
              {this.props.waiting && <LinearProgress mode="indeterminate" />}

            </DialogContent>
          <DialogActions>
            <Button 
              onClick = {this.props.hide} 
              color='primary'>
                Cancelar
            </Button>,
            <Button 
              onClick = {handleSubmit}
              color='primary'>
                {this.state.editing? 'Editar' : 'Registrar'}
            </Button>
          </DialogActions>
        </Dialog>)
  }
}