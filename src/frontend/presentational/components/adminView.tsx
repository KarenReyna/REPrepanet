import * as React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import { CustomList } from 'Presentational/components/customList';
import Styles from 'Presentational/style/elementStyles';
import Navbar from 'Presentational/elements/Navbar';

export class AdminView extends React.Component<any, any> {
  state = {
    value: 0,
  };

  public render() {
      const { value } = this.state;
      return (
        <div>
          <Navbar title="REPrepanet"/>
  
        <Paper>
            <Button 
                onClick = {this.props.logout}
                color="primary"
                style={Styles.logoutButton.style}>
                Cerrar sesión
            </Button>
            <br />
          <Tabs
            value={this.state.value}
            onChange= {(_, value) => {this.setState({ value })}}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>

            {this.props.admins != null && <Tab label="Administradores"/>}
            {this.props.admins != null && <Tab label="Colaboradores"/>}
            <Tab label="Categorías" />
            <Tab label="Recursos" />

          </Tabs>
          {(value === 0 && this.props.admins != null)? 
            <CustomList
              items = {this.props.admins}
              show = {this.props.showUser(true)}
              hide = {this.props.hideUser}
              delete = {this.props.deleteUser}/>
              : null}
          {(value === 1 && this.props.admins != null)? 
            <CustomList
              items = {this.props.collabs}
              show = {this.props.showUser(false)}
              hide = {this.props.hideUser}
              delete = {this.props.deleteUser}/>
              : null}
              
          {(value === 2 || value === 0 && this.props.admins == null)?
            <CustomList
              items = {this.props.categories}
              show = {this.props.showCategory}
              hide = {this.props.hideCategory}
              delete = {this.props.deleteCategory}/>
              : null}
          {(value === 3 || value === 1 && this.props.admins == null)?
            <CustomList
              items = {this.props.resources}
              show = {this.props.showResource}
              hide = {this.props.hideResource}
              delete = {this.props.deleteResource}/>
              : null}
        </Paper>
        </div>
      )
  }
}