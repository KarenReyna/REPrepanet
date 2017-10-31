import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as Types from '../constants';

export class EditCollection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collection: {} as Types.CollectionFull,
    }
  }

  handleChange(type: string | undefined, newValue: string) {
    if (type == "name") {
      this.state.collection.name = newValue;
    } else if (type == "description") {
      this.state.collection.description = newValue;
    }
  }

  public render() {

    var collectionData = this.props.collectionData;

    if(collectionData != null) {
      this.state.collection._id = collectionData._id;
      this.state.collection.name = collectionData.name;
      this.state.collection.description = collectionData.description;
    } else {
      collectionData = {};
    }

    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.editCollectionClose}/>,
      <FlatButton label = "Eliminar" onClick = {() => this.props.deleteCollection(this.state.collection)}/>,
      <FlatButton label = "Modificar" onClick = {() => this.props.editCollectionSubmit(this.state.collection)}/>,
    ];
    return (
      <Dialog 
        open = {this.props.open} 
        actions = {actions} 
        modal = {false}>
          <h2>Editar colección</h2>
          <TextField
              hintText="Nombre"
              data-type="name"
              floatingLabelText="Nombre"
              defaultValue = {this.state.collection.name}
              onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
          <TextField
            hintText="Descripción"
            data-type="description"
            floatingLabelText="Descripción"
            defaultValue = {this.state.collection.description}
            onChange={(e, newValue) => this.handleChange((e.target as HTMLElement).dataset.type, newValue)}
          /><br />
      </Dialog>)
  }
}