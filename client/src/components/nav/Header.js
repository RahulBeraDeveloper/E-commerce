import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonPlus, Person } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import custom CSS for hover effects

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleSelect = (eventKey) => {
    setCurrent(eventKey);
  };

  return (
    <Navbar bg="light" expand="lg" onSelect={handleSelect}>
      <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" activeKey={current}>
          <Nav.Link as={Link} to="/" eventKey="home" className="nav-link-custom">
            Home
          </Nav.Link>
          <NavDropdown title="Username" id="basic-nav-dropdown" className="nav-link-custom">
            <NavDropdown.Item eventKey="setting:1">Option 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="setting:2">Option 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ms-auto" activeKey={current}>
          <Nav.Link as={Link} to="/register" eventKey="register" className="nav-link-custom">
            <PersonPlus /> Register
          </Nav.Link>
          <Nav.Link as={Link} to="/login" eventKey="login" className="nav-link-custom">
            <Person /> Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
