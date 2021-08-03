import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const Routes: React.FC = () => {
  const { userToken } = useAuth();

  const redirectToLogin = !userToken && <Redirect to="/login" />;

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/me">{redirectToLogin || <Profile />}</Route>
        <Route path="/" exact>
          {redirectToLogin || <Home />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
