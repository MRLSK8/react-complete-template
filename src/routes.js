import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import * as auth from './services/auth';
import { fetcher } from './services/api';
import { SWRConfig } from 'swr';
import PropTypes from 'prop-types';

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

function Routes() {
  return (
    <Switch>
      <Route path='/login/:id' component={Login} />
      <PrivateRoute path='/main' component={Main} />

      <Redirect from='/*' to='/login' />
    </Switch>
  );
}

export default Routes;
