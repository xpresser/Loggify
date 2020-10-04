import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { logout } from "src/store/slices/auth";

const AppBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (user) {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Navbar.Brand as={NavLink} to="/">
          DevCamp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavbarUserName>User: {user.fullName} </NavbarUserName>
            <Nav.Link eventKey="1" as={NavLink} to="/timesheets" exact>
              All timesheets
            </Nav.Link>

            <Nav.Link eventKey="1" as={NavLink} to="/create" exact>
              Create timesheet
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                dispatch(logout());
              }}
            >
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
