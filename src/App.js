import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home.component";
import Users from "./components/Users.component";
import NavComponent from "./components/Nav.component";
import UserDetail from "./components/UserDetail.component";

function App() {
    return (
        <Router>
            <div>
                <NavComponent />
                <Switch>
                    <Route exact path="/">
                        <Home title='This is madness!' />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/user/:id">
                        <UserDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
