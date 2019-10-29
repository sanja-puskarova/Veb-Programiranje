import React from 'react';
import logo from './logo.svg';


import Adopt from "./pages/Adopt";
import HomePage from "./pages/HomePage";
import './App.css';
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
        </Switch>
    </div>
  );
}

export default App;
