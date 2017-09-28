import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'pills/dist/pills.min.css';

import './App.css';
import Home from './components/Home';

const App = () => <MuiThemeProvider><Home /></MuiThemeProvider>;

export default App;
