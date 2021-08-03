import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import light from './styles/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
