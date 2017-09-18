import * as React from 'react';
var testIcon = require('../assets/melon.svg');

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App by Melon</h2>
          <img src={testIcon}/>
        </div>
      </div>
    );
  }
}