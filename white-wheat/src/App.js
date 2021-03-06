import React from 'react';
import './App.css';
import Browse from './Browse.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/">
            <p> we at home </p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
