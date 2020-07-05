import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

function src() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default src;
