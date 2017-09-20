import React from 'react';
import './App.css';
import Basic from './router/'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
      <Basic />
  </MuiThemeProvider>
)

export default App
