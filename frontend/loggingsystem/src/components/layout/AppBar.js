import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Navbar.Brand as={NavLink} to="/">
          DevCamp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" as={NavLink} to="/timesheets" exact>
              All timesheets
            </Nav.Link>

            <Nav.Link eventKey="1" as={NavLink} to="/create" exact>
              Create timesheet
            </Nav.Link>

            <Nav.Link eventKey="1" as={NavLink} to="/" exact>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Navbar.Brand as={NavLink} to="/">
          DevCamp
        </Navbar.Brand>
      </Navbar>
    );
  }
};

export { AppBar };
