import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'pills/dist/pills.min.css';

import './App.css';
import Home from './components/Home';

const mui = getMuiTheme({
  fontFamily: 'Lato'
});

const App = () => <MuiThemeProvider muiTheme={mui}><Home /></MuiThemeProvider>;

export default App;
