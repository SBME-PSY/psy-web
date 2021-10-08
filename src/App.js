import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./Screens/Contactus"

import Home from "./Screens/Home";
import Administrator from "./Screens/Adminstration";

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <Route path="/Admin">
          <Administrator/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;