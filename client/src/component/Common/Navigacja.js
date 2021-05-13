import React from 'react'
import './Navbar.css';
import Main from '../Main/Main'
import Details from '../Details/Details'
import Recipes from '../Recipes/Recipes'
import Login from '../Login/Login'
import Ranking from '../Rank/Ranking'
import Konto from '../Userprofile/Konto'
import Ulubiony from '../Favourite/Ulubiony'
import Rejestracja from '../Register/Rejestracja'
import Wyszukiwarka from './Wyszukiwarka'
import Generator from '../Generator/generator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navigacja() {
  return (
    <Router>
      <div >
        <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />
            <Link to="/" clasname="logo">Anielska kuchnia</Link>
          </Navbar.Brand>
          <Form inline action="wyszukiwarka" className="linki2">
            <FormControl type="text" placeholder="Szukaj przepisów..." className="mr-sm-2" />
            <Button variant="outline-success" type="submit" className="linki3">Szukaj</Button>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="collapse" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="przepisy">Przepisy</Nav.Link>
              <Nav.Link href="ranking">Ranking</Nav.Link>
              <Nav.Link href="konto">Konto</Nav.Link>
              <Nav.Link href="Ulubiony"> Ulubiony</Nav.Link>
              <Nav.Link href="generator">Generator</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
            </Nav>


            <Nav className="ml-sm-1">
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="rejestracja">Rejestracja</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/przepisy">
            <Recipes />
          </Route>
          <Route path="/generator">
            <Generator />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Rejestracja">
            <Rejestracja />
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
          <Route path="/wyszukiwarka">
            <Wyszukiwarka />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
