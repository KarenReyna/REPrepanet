import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import Main from './containers/main';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {cyan500} from 'material-ui/styles/colors';
import registerServiceWorker from './scripts/registerServiceWorker';
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