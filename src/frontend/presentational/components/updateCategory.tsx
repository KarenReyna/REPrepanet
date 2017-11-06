import * as React from 'react';

import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import { Category } from 'Config/constants';

export class UpdateCategory extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: {} as Category
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
    return (
      <Dialog 
        open = {this.props.visible}
        onRequestClose={this.props.hide}>
        <DialogTitle>Categoría</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button 
            onClick = {this.props.hide}
            color='primary'>
              Cancelar
          </Button>,
          <Button 
            onClick = {() => this.props.submit(this.state.category)}
            color='primary'>
              Agregar
          </Button>
        </DialogActions>
      </Dialog>)
  }
}