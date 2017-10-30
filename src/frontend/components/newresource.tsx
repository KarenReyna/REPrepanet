import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as Types from '../constants';

export class NewResource extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chips: [],
      selectFieldValue: null,
      resource: {} as Types.Resource,
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

  handleChange(type: string | undefined, newValue: string) {
    let newState = type && 
      type == "name" ? 
        { resource: {...this.state.resource, name: newValue}} : 
      type == "description" ? 
        { resource: {...this.state.resource, description: newValue}} : 
      type == "url" ? 
        { resource: {...this.state.resource, url: newValue}} : {}
    this.setState(newState);
  }

  handleSelectFieldChange(event, key, value) {
    console.log(event)
    console.log(key)
    this.setState({
      selectFieldValue: value,
      resource: {
        ...this.state.resource,
        category: value
      }
    });
  }

  menuItems(categories) {
    return categories.map((category) => (
      <MenuItem
        key={category._id}
        insetChildren={true}
        value={category._id}
        primaryText={category.name}
      />
    ));
  }
  private close() {
    this.setState({
      chips: [],
      selectFieldValue: null
    });
    this.props.newResourceHide();
  }
  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.close.bind(this)}/>,
      <FlatButton label = "Añadir" onClick = {() => this.props.submit(this.state.resource)}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.close.bind(this)}>
        <TextField
          hintText = "Nombre"
          data-type="name"
          floatingLabelText = "Nombre"
          onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}/>
        <br />
        <TextField
          hintText = "Descripción"
          data-type="description"
          floatingLabelText = "Descripción"
          multiLine = {true}
          rows = {2}
          onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}/>
        <br />
        <SelectField
          floatingLabelText="Categoría"
          value={this.state.selectFieldValue}
          onChange={(e, key, value) => this.handleSelectFieldChange(e, key, value)}
        >
          {this.menuItems(this.props.categories)}
        </SelectField>
        <br />
        <TextField
          hintText = "URL"
          data-type="url"
          floatingLabelText = "URL"
          onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}/>
        <br />
        <RaisedButton
          containerElement='label'
          label='Imagen'>
          <input type="file" />
        </RaisedButton>
        <br />
        <ChipInput
          value={this.state.chips}
          onBeforeRequestAdd={(chip) => this.onBeforeRequestAdd(chip)}
          onRequestAdd={(chip) => this.handleRequestAdd(chip)}
          onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
          floatingLabelText='Etiquetas del recurso'
          dataSource={this.props.tags}
        />
      </Dialog>)
  }
}