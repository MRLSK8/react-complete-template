import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  </ThemeProvider>
);

export default App;
