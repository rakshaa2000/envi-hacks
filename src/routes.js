import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./MedicalWaste/App";
import Home from "./Home/Home";
import NewApp from "./categorise/App";
import history from './history';
import QuizApp from "./quiz";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/MedicalWaste" component={App} />
                    <Route path="/Categorise" component={NewApp} />
                    <Route path="/Quiz" component={QuizApp} />
                </Switch>
            </Router>
        )
    }
}
