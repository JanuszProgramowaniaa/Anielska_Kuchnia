import React from 'react'
import './Navbar.css';
import Main from './Main'
import Details from './Details'
import Recipes from './Recipes'
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <Router>
      <div>
        <nav className="topnav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>
            <li>
              <Link to="/Recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/Login" className="loginLink">Login</Link>
            </li>
          </ul>
        </nav>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/Recipes">
            <Recipes />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
