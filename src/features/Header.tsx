import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../assets/img/logo.png";

const Header = ({
  setCurrentSection,
}: {
  setCurrentSection: (section: string) => void;
}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <div className="navbar-logo-title">
          <img src={logoImage} alt="Taller Logo" className="navbar-logo" />
          <Navbar.Brand href="#home" className="navbar-title">
            TALLER DE ESCULTURA Y PINTURA
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              className="mx-2 nav-button"
              onClick={() => setCurrentSection("home")}
            >
              <FontAwesomeIcon icon="home" className="me-2" />
              Inicio
            </Button>
            <Button
              variant="outline-light"
              className="mx-2 nav-button"
              onClick={() => setCurrentSection("bio")}
            >
              <FontAwesomeIcon icon="user" className="me-2" />
              Biografía
            </Button>
            <Button
              variant="outline-light"
              className="mx-2 nav-button"
              onClick={() => setCurrentSection("works")}
            >
              <FontAwesomeIcon icon="star" className="me-2" />
              Obras destacadas
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
