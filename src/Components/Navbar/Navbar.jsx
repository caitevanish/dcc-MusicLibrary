import React from "react";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavBar = (props) => {
  return (
    <Navbar className="dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">Miles Above Music</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
