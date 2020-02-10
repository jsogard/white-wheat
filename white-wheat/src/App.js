import React from 'react';
import './App.css';
import Browse from './pages/Browse.js';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container,
  Row, Col
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col sm={2}><Link to="/">Home</Link></Col>
          <Col sm={2}><Link to="/browse">Browse</Link></Col>
        </Row>
        <Row>
          <Switch>
            <Route path="/browse">
              <Browse />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
