import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

import { Header } from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

const Routes: React.FC = () => {
  const { userToken } = useAuth();

  const redirectToLogin = !userToken && <Redirect to="/login" />;

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset_password/:token" component={ResetPassword} />

        {redirectToLogin || (
          <Fragment>
            <Header />
            <Route path="/me" component={Profile} />
            <Route path="/" exact component={Home} />
          </Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
