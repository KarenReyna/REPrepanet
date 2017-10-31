import * as React from 'react';
import Dialog, {DialogActions} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
// import ChipInput from 'material-ui-chip-input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import * as Types from '../constants';

export class ResourceDialog extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chips: [],
      selectFieldValue: '',
      resource: {} as Types.Resource,
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
  private close() {
    this.setState({
      chips: [],
      selectFieldValue: ''
    });
    this.props.hide();
  }
  public render() {
    const actions = [
      <Button key={1} onClick = {this.close.bind(this)}>Cancelar</Button>,
      <Button key={2} onClick = {() => this.props.submit(this.state.resource)}>Añadir</Button>
    ];
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.close.bind(this)}>
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
          {this.menuItems(this.props.categories)}
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
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>)
  }
}