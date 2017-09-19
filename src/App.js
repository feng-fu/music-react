import React from 'react';
import './App.css';
import Basic from './router/'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
      <Basic />
  </MuiThemeProvider>
);


export default App;
