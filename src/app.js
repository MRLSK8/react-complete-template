import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
  <Router>
    <Header />
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
