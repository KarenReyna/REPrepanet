import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as Types from '../constants';

export class NewCategory extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: {} as Types.Category
    }
  }

  handleChange(type: string | undefined, newValue: string) {
    let newState = type && 
      type == "name" ? 
        { category: {...this.state.category, name: newValue}} : 
      type == "description" ? 
        { category: {...this.state.category, description: newValue}} : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.newCategoryHide}/>,
      <FlatButton label = "Añadir" onClick = {() => this.props.submit(this.state.category)}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.newCategoryHide}>
        <TextField
          hintText = "Nombre"
          floatingLabelText = "Nombre"
          data-type = "name"
          onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}/>
        <br />
        <TextField
          hintText = "Descripción"
          floatingLabelText = "Descripción"
          data-type = "description"
          multiLine = {true}
          rows = {2}
          onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}/>
        <br />
      </Dialog>)
  }
}