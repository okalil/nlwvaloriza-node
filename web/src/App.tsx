import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";

import light from "./styles/light";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <ThemeProvider theme={light}>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <div>Home</div>
                </Route>
            </ThemeProvider>
            <GlobalStyle />
        </Router>
    );
}

export default App;
