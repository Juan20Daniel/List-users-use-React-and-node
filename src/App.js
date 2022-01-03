import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginSigin from './pages/loginSigin/LoginSigin';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginSigin} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default App;