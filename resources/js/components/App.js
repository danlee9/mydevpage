import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import './App.css';
import Menu from './Menu';
import Main from './Main';
import About from './About';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Menu />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
