import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import { ThemeProvider } from "styled-components";
import light from "./styles/light";
import GlobalStyle from "./styles/global";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
    const loggedIn = localStorage.getItem("userToken");

    return (
        <Router>
            <ThemeProvider theme={light}>
                <AuthContextProvider>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            {loggedIn ? <Home /> : <Redirect to="/login" />}
                        </Route>
                    </Switch>
                </AuthContextProvider>
            </ThemeProvider>
            <GlobalStyle />
        </Router>
    );
}

export default App;
