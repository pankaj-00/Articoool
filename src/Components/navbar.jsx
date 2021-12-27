import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Navgbar = () => {
  const user = false;
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Container >
        <FontAwesomeIcon icon={solid("bars")} />
        <Nav className="me-auto">
          <NavDropdown title="MENU" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/About">About</NavDropdown.Item>
            <NavDropdown.Item href="/Authors">Authors</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Brand href="/">articoool.</Navbar.Brand>
        <Link to="/Login" className="Link">
          <Button
            variant="outline-info"
            style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
          >
            REGISTER / LOG IN
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navgbar;
