import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function src() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default src;
