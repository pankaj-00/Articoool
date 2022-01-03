import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

const Navgbar = () => {
  const { currentUser, logOut } = useAuth();
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Container>
        <FontAwesomeIcon icon={solid("bars")} />
        <Nav className="me-auto">
          <NavDropdown title="MENU" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/About">About</NavDropdown.Item>
            <NavDropdown.Item href="/Authors">Authors</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Navbar.Brand href="/">articoool.</Navbar.Brand>
        {currentUser ? (
          <>
            <Badge bg="secondary">{currentUser.displayName}</Badge>
            <Button variant="secondary" onClick={handleLogout}>
              Log Out
            </Button>
          </>
        ) : (
          <Link to="/Login" className="Link">
            <Button
              variant="outline-info"
              style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
            >
              REGISTER / LOG IN
            </Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Navgbar;
