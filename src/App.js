import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contactus";
import Administrator from "./Admin";

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