import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

export class NewResource extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      chips: []
    }
  }

  onBeforeRequestAdd(chip) {
    return chip.length >= 3;
  }

  handleRequestAdd(chip) {
    this.setState({
      chips: [...this.state.chips, chip]
    })
  }

  handleRequestDelete (deletedChip) {
    this.setState({
      chips: this.state.chips.filter((c) => c !== deletedChip)
    })
  }

  public render() {
    const actions = [
      <FlatButton label = "Cancelar" onClick = {this.props.newResourceHide}/>,
      <FlatButton label = "Añadir" onClick = {() => this.props.addNewResource()}/>
    ];
    return (
      <Dialog 
        open = {this.props.visible} 
        actions = {actions} 
        modal = {false}
        onRequestClose={this.props.newResourceHide}>
        <TextField
          hintText = "Nombre"
          floatingLabelText = "Nombre"/>
        <br />
        <TextField
          hintText = "Descripción"
          floatingLabelText = "Descripción"
          multiLine = {true}
          rows = {2}/>
        <br />
        <TextField
          hintText = "URL"
          floatingLabelText = "URL"/>
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
        />
      </Dialog>)
  }
}