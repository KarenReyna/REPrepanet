import * as React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {cyan500} from 'material-ui/styles/colors';
import registerServiceWorker from './scripts/registerServiceWorker';
import { configureStore } from './store'

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

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </MuiThemeProvider>
    )
  }
}
registerServiceWorker();