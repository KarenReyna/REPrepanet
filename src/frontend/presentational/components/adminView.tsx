import * as React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { UserList } from 'Presentational/components/userList';

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
          </Tabs>
          {value === 0 && <UserList users = {this.props.users}/>}
          {value === 1 && <UserList users = {this.props.users}/>}
        </Paper>
      )
  }
}