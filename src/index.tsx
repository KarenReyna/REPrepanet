import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import User from './frontend/containers/user';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {cyan500} from 'material-ui/styles/colors';
import registerServiceWorker from './frontend/scripts/registerServiceWorker';
import configureStore from './store'

const store = configureStore();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    //textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider  muiTheme={muiTheme}>
        <User />
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  rootEl
);

registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept();

  const NextApp = require<{default: typeof User}>("./frontend/containers/user").default;

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