import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import RandomPracticeMode from "./Pages/RandomPracticeMode";
import SimplePracticeMode from "./Pages/SimplePracticeMode";
import About from "./Pages/About";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <div className="text-center">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            Dart Counter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/random" activeClassName="active">
                Random Practice Mode
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Main Content */}
        <Routes>
          <Route path="/random" element={<RandomPracticeMode />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<SimplePracticeMode />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
