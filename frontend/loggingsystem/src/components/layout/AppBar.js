import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth";
import { NavbarUserName } from "../generic/NavbarUserName/NavbarUserName.styled";

const AppBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Navbar.Brand as={NavLink} to="/">
        DevCamp
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {user ? (
          <Nav className="ml-auto">
            <NavbarUserName>User: {user.fullName} </NavbarUserName>
            <Nav.Link eventKey="1" as={NavLink} to="/timesheets" exact>
              All timesheets
            </Nav.Link>

            <Nav.Link eventKey="1" as={NavLink} to="/" exact>
              Create timesheet
            </Nav.Link>

            <Nav.Link
              eventKey="1"
              as={NavLink}
              to="/login"
              exact
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" as={NavLink} to="/login" exact>
              Login
            </Nav.Link>
            <Nav.Link eventKey="1" as={NavLink} to="/signup" exact>
              Sign Up
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export { AppBar };
