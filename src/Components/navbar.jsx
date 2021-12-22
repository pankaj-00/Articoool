import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Navgbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <FontAwesomeIcon icon={solid("bars")} />
        <Nav className="me-auto">
          <NavDropdown title="MENU" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Authors</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Brand href="#home">articoool.</Navbar.Brand>
        <Button className="loginButton">REGISTER/LOG IN</Button>
      </Container>
    </Navbar>
  );
};

export default Navgbar;
