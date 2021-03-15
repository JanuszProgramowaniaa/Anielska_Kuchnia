import logo from './logo.svg';
import './App.css';
import Baner from './component/Baner'
import Main from './component/Main'
import Details from './component/Details'
import About from './component/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const nameTitle ="Strona główna"
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Main">Home</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Main">
            <Main />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
