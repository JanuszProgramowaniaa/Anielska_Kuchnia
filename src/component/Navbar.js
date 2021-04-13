import React from 'react'
import './Navbar.css';
import Main from './Main'
import Details from './Details'
import Recipes from './Recipes'
import Login from './Login'
import Ranking from './Ranking'
import Konto from './Konto'
import Ulubiony from './Ulubiony'
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
            <li>
              <Link to="/Ranking">Ranking</Link>
            </li>
            <li>
              <Link to="/Konto" className="kontoLink">Konto</Link>
            </li>
            <li>
              <Link to="/Ulubiony">Ulubiony przepis</Link>
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
          <Route path="/Ranking">
            <Ranking />
          </Route>
          <Route path="/Konto">
            <Konto />
          </Route>
          <Route path="/Ulubiony">
            <Ulubiony />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
