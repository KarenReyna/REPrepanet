import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import Main from './containers/main';
import { MuiThemeProvider } from "material-ui/styles";
import registerServiceWorker from './scripts/registerServiceWorker';
import configureStore from './store'

const store = configureStore();

const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  rootEl
);

registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  
  const NextApp = require<{default: typeof Main}>("./containers/main").default;

  module.hot.dispose(() => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}