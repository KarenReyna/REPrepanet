import * as React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { CustomList } from 'Presentational/components/customList';

export class AdminView extends React.Component<any, any> {
  state = {
    value: 0,
  };

  public render() {
      const { value } = this.state;
      return (
        <Paper>
          <Tabs
            value={this.state.value}
            onChange= {(_, value) => {this.setState({ value })}}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Administradores"/>
            <Tab label="Colaboradores"/>
            <Tab label="Categorías" />
            <Tab label="Recursos" />
          </Tabs>
          {value === 0 && <CustomList items = {this.props.admins}/>}
          {value === 1 && <CustomList items = {this.props.collabs}/>}
          {value === 2 && <CustomList items = {this.props.categories}/>}
          {value === 3 && <CustomList items = {this.props.resources}/>}
        </Paper>
      )
  }
}