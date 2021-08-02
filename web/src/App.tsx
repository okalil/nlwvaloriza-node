import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/light';

function App() {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <AuthContextProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </AuthContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
}

export default App;
