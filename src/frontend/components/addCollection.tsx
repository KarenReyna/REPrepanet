import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as Types from '../constants';

export class AddCollection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collection: {} as Types.Collection
    }
  }

  handleChange(type: string | undefined, newValue: string) {
    let newState = type && 
      type == "name" ? 
        { collection: {...this.state.collection, name: newValue}} : 
      type == "description" ? 
        { collection: {...this.state.collection, description: newValue}} : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.addCollectionClose}/>,
      <FlatButton label = "Registrar" onClick = {() => this.props.addCollectionSubmit(this.state.collection)}/>,
    ];
    return (
      <Dialog 
        open = {this.props.open} 
        actions = {actions} 
        modal = {false}>
          <h2>Colecciones</h2>
          <TextField
              hintText="Nombre"
              data-type="name"
              floatingLabelText="Nombre"
              onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Descripción"
            data-type="description"
            floatingLabelText="Descripción"
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
      </Dialog>)
  }
}