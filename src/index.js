import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login';
import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import * as auth from './services/auth';
import { fetcher } from './services/api';
import { SWRConfig } from 'swr';
import PropTypes from 'prop-types';

const history = createBrowserHistory();

function PrivateRoute({ component: Component, ...args }) {
  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      <Route
        {...args}
        render={(props) =>
          auth.isAuthenticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    </SWRConfig>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  location: PropTypes.object,
};

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/main' component={Main} />

        <Redirect from='/*' to='/login' />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
