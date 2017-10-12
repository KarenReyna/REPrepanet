import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export class Create extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
      const actions = [
        <FlatButton label = "Cancelar" onClick = {this.props.closeCreate}/>,
      ];
      
      return (
        <Dialog 
            open = {this.props.open} 
            actions = {actions} 
            modal = {false}
            onRequestClose = {this.props.closeCreate}>
              <TextField hintText="Nombre" /> <br />
        </Dialog>
      );
    }
}