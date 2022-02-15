import React from "react";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavBar = (props) => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home">Miles Above Music</Navbar.Brand>
        {/* <Nav className="me-auto">
      <Nav.Link href="#MyPosts">My Posts</Nav.Link>
    </Nav> */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
