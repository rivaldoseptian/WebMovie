import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const handlerLogout = () => {
    localStorage.clear();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "red" : "inherit",
                })}
              >
                Dashboard
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/addmovie"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "red" : "inherit",
                })}
              >
                Add MOvie
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/genre"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "red" : "inherit",
                })}
              >
                Genre
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "red" : "inherit",
                })}
              >
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavLink
                to="/login"
                onClick={(e) => {
                  handlerLogout();
                }}
              >
                LogOut
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
