import * as React from 'react';
import { Route } from 'react-router-dom';
import { history } from './store';

import Main from './containers/main';
import User from './containers/user';

import { ConnectedRouter } from 'react-router-redux'

export class Routes extends React.Component<any, any> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/usuario" component={User}/>
        </div>
      </ConnectedRouter>
    );
  }
}