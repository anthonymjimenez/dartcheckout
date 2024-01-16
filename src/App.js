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
              <Nav.Link as={NavLink} to="/simple" activeClassName="active">
                Simple Practice Mode
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Main Content */}
        <Routes>
          <Route path="/simple" element={<SimplePracticeMode />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<RandomPracticeMode />} />
        </Routes>

        {/* Footer */}
        <div className="mt-5">
          <footer>
            <p>
              Created by{" "}
              <a
                href="https://github.com/anthonymjimenez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthony Jimenez
              </a>
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
