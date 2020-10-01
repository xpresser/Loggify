import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Navbar.Brand as={NavLink} to="/">
        DevCamp
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link eventKey="1" as={NavLink} to="/" exact>
            All timesheets
          </Nav.Link>

          <Nav.Link eventKey="1" as={NavLink} to="/" exact>
            Create timesheet
          </Nav.Link>

          <Nav.Link eventKey="1" as={NavLink} to="/" exact>
            Logout
          </Nav.Link>

          <Nav.Link eventKey="1" as={NavLink} to="/login" exact>
            Login
          </Nav.Link>
          <Nav.Link eventKey="2" as={NavLink} to="/signup" exact>
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { AppBar };
