import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
