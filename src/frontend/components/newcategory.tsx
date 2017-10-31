import * as React from 'react';
import Dialog, { DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import * as Types from '../constants';

export class NewCategory extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: {} as Types.Category
    }
  }

  handleChange(type: string | undefined, newValue: string | undefined) {
    let newState = type && 
      type == "name" ? 
        { category: {...this.state.category, name: newValue}} : 
      type == "description" ? 
        { category: {...this.state.category, description: newValue}} : {};
    this.setState(newState);
  }

  public render() {
    const actions = [
      <Button key={1} onClick = {this.props.newCategoryHide}>
          Cancelar
      </Button>,
      <Button key={2} onClick = {() => this.props.submit(this.state.category)}>
          Añadir
      </Button>
    ];
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.newCategoryHide}>
        <TextField
          label = "Nombre"
          data-type = "name"
          onChange={(e) => 
            this.handleChange((e.target as HTMLElement).dataset.type, 
            (e.target as HTMLElement).dataset.txt)}/>
        <br />
        <TextField
          label = "Descripción"
          data-type = "description"
          rows = {2}
          onChange={(e) => 
            this.handleChange((e.target as HTMLElement).dataset.type,
            (e.target as HTMLElement).dataset.txt)}/>
        <br />
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>)
  }
}