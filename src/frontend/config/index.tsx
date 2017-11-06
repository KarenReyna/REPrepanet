import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { App } from 'Config/app';

const rootEl = document.getElementById("root");

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl
  );
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();

  module.hot.dispose(() => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      rootEl
    );
  });
}