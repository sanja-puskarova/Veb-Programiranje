import React from 'react';
import Adopt from "./pages/Adopt";
import About from "./pages/About";
import Statistic from "./pages/Statistic";
import HomePage from "./pages/HomePage";
import Form from "./pages/Form";
import Donate from "./pages/Donate";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch} from "react-router-dom";
import {Route} from 'react-router';
function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/adopt">
                <Adopt/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/statistic">
                <Statistic/>
            </Route>
            <Route exact path="/form">
                <Form/>
            </Route>
            <Route exact path="/donate">
                <Donate/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
