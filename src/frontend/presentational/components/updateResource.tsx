import * as React from 'react';
import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
// import ChipInput from 'material-ui-chip-input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { Resource, Status } from 'Config/constants';
import { LinearProgress } from 'material-ui';
import { 
  isEmpty
} from 'Config/helper';

export class UpdateResource extends React.Component<any, any> {
  state = {
    resource: {
      name: '',
      description: '',
      url: '',
      tags: ['tag1', 'tag2', 'tag3'],
      category: '',
      type: '',
    } as Resource,
    editing: false,
    chips: [],
    selectFieldValue: ''
  };

  menuItems(categories) {
    return categories.map((category) => (
      <MenuItem
        key={category._id}
        value={category._id}>
        {category.name}
      </MenuItem>
    ));
  }

  private createContent(object) {
    switch(object.status) {
      case Status.Ready:
        if(object && object.all && object.all.length > 0)
          return this.menuItems(object.all);
        return (<p>No hay categorías ni recursos</p>);
      case Status.Failed:
        return (<p>No hay conexión a Internet</p>);
      case Status.WaitingOnServer:
      default:
        return (<LinearProgress mode="indeterminate" />);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!isEmpty(nextProps.object)) {
      if(!nextProps.failed && !nextProps.waiting) {
        this.setState({
          resource: {
            name: nextProps.object.name,
            description: nextProps.object.description,
            url: nextProps.object.url,
            tags: nextProps.object.tags,
            category: nextProps.object.category,
            type: nextProps.object.type
          } as Resource,
          editing: true
        });
      }
    }
    else {
      this.setState({
        resource: {
          name: '',
          description: '',
          url: '',
          tags: ['tag1', 'tag2', 'tag3'],
          category: '',
          type: '',
        } as Resource,
        editing: false
      });
    }
  }

//   onBeforeRequestAdd(chip) {
//     return chip.length >= 3;
//   }

//   handleRequestAdd(chip) {
//     this.setState({
//       chips: [...this.state.chips, chip],
//       resource: {
//         ...this.state.resource,
//         tags: [...this.state.chips, chip]
//       }
//     })
//   }

//   handleRequestDelete (deletedChip) {
//     this.setState({
//       chips: this.state.chips.filter((c) => c !== deletedChip),
//       resource: {
//         ...this.state.resource,
//         tags: this.state.chips.filter((c) => c !== deletedChip)
//       }
//     })
// }

  public render() {
    var handleChange = (name) => e => {
        this.setState({
          resource: { 
            ...this.state.resource,
            [name]: e.target.value 
          }
        });
    };

    var handleSelectFieldChange= (name) => e => {
      this.setState({
        selectFieldValue: e.target.value,
        resource: {
          ...this.state.resource,
          [name]: e.target.value
        }
      });
  };

    var handleSubmit = () => {
      let resource = this.state.resource
      console.log(resource);
      if(this.state.editing) {
        resource._id = this.props.object._id;
      }
      this.props.submit(resource, this.state.editing);
    }

    var title = this.state.editing? 'Editar Recurso' : 'Registrar Recurso';
    let categoryContent = this.createContent(this.props.categories);
    return (
        <Dialog 
          open = {this.props.visible}
          onRequestClose={this.props.hide}>
            <DialogTitle>{title}</DialogTitle>
              <DialogContent>

              <TextField
                  label="Nombre"
                  value={this.state.resource.name}
                  onChange={handleChange('name')}
              /><br />

              <TextField
                label="Descripción"
                value={this.state.resource.description}
                rows={2}
                multiline={true}
                onChange={handleChange('description')}
              /><br />

              {/* <TextField
                label="Categoría"
                value={this.state.resource.category.name}
                rows={2}
                multiline={true}
                onChange={handleChange('category')}
              /><br /> */}
              
              <InputLabel htmlFor="category-helper">Categoría</InputLabel>
                <Select
                  input={<Input id="category" />}
                  value={this.state.selectFieldValue}
                  onChange={handleSelectFieldChange('category')}
                  fullWidth={true}
                >
                  {categoryContent}
                </Select>
              <br />
                  
              <TextField
                label="URL"
                value={this.state.resource.url}
                rows={2}
                multiline={true}
                onChange={handleChange('url')}
              /><br />

              <TextField
                label="Tipo"
                value={this.state.resource.type}
                rows={2}
                multiline={true}
                onChange={handleChange('type')}
              /><br />

              {/* <TextField
                label="Tipo"
                value={this.state.resource.tags}
                rows={2}
                multiline={true}
                onChange={handleChange('tags')}
              /><br /> */}

              {/* <ChipInput
                  value={this.state.chips}
                  onBeforeRequestAdd={(chip) => this.onBeforeRequestAdd(chip)}
                  onRequestAdd={(chip) => this.handleRequestAdd(chip)}
                  onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
                  floatingLabelText='Etiquetas del recurso'
                  dataSource={this.props.tags}
              /> */}

              {this.props.failed && <p>El recurso ya existe</p>}
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