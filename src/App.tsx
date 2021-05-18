import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import ChatPage from './pages/chat/Chat';
import LoginPage from './pages/login/Login';

const App = () => {
    const userExists = localStorage.getItem('user');
    const isAuthenticated = userExists;

    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect
                            to={isAuthenticated ? '/chat' : '/login'}
                        ></Redirect>
                    </Route>
                    <Route path={'/login'} component={LoginPage} />
                    <Route path={'/chat'} component={ChatPage} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
