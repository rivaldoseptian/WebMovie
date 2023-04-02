import React from "react";

import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "#ff6347" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          My <br /> Tomatoes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "red" : "inherit",
                })}
              >
                Dasboard
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
