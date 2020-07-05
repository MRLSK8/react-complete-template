import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function src() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default src;
