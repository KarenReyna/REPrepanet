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

export class UpdateResource extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chips: [],
      selectFieldValue: '',
      resource: {} as Resource,
    }
    if(this.props.resource && this.props.resource._id != '') {
      this.state.resource = this.props.resource
    }
  }
  
  onBeforeRequestAdd(chip) {
    return chip.length >= 3;
  }

  handleRequestAdd(chip) {
    this.setState({
      chips: [...this.state.chips, chip],
      resource: {
        ...this.state.resource,
        tags: [...this.state.chips, chip]
      }
    })
  }

  handleRequestDelete (deletedChip) {
    this.setState({
      chips: this.state.chips.filter((c) => c !== deletedChip),
      resource: {
        ...this.state.resource,
        tags: this.state.chips.filter((c) => c !== deletedChip)
      }
    })
  }

  handleChange(type: string | undefined, newValue: string | undefined) {
    let newState = type && 
      type == "name" ? 
        { resource: {...this.state.resource, name: newValue}} : 
      type == "description" ? 
        { resource: {...this.state.resource, description: newValue}} : 
      type == "url" ? 
        { resource: {...this.state.resource, url: newValue}} : {}
    this.setState(newState);
  }

  handleSelectFieldChange(event) {
    this.setState({
      selectFieldValue: event.target.value,
      resource: {
        ...this.state.resource,
        category: event.target.value
      }
    });
  }

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

  public render() {
    let categoryContent = this.createContent(this.props.categories);
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.hide}>
        <DialogTitle>Recurso</DialogTitle>
        <DialogContent>
        <TextField
          label = "Nombre"
          data-type="name"
          onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, 
            (e.target as HTMLElement).dataset.txt)}/>
        <br />
        <TextField
          label = "Descripción"
          data-type="description"
          multiline= {true}
          rows = {2}
          onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, 
            (e.target as HTMLElement).dataset.txt)}/>
        <br />
        <InputLabel htmlFor="category-helper">Categoría</InputLabel>
        <Select
          input={<Input id="category" />}
          value={this.state.selectFieldValue}
          onChange={(e) => this.handleSelectFieldChange(e)}
        >
          {categoryContent}
        </Select>
        <br />
        <TextField
          data-type="url"
          label = "URL"
          onChange={(e) => this.handleChange((e.target as HTMLElement).dataset.type, 
            (e.target as HTMLElement).dataset.txt)}/>
        <br />
        <Button
          raised>
          Imagen
          <input type="file" />
        </Button>
        <br />
        {/* <ChipInput
          value={this.state.chips}
          onBeforeRequestAdd={(chip) => this.onBeforeRequestAdd(chip)}
          onRequestAdd={(chip) => this.handleRequestAdd(chip)}
          onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
          floatingLabelText='Etiquetas del recurso'
          dataSource={this.props.tags}
        /> */}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick = {this.props.hide}
            color='primary'>
            Cancelar
          </Button>,
          <Button 
            onClick = {() => this.props.submit(this.state.resource)}
            color='primary'>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>)
  }
}