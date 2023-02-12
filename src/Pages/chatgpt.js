import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Header from '../Component/Navbar'
import Wakaf from '../Pages/Accordion_Wakaf'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Example Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <Navbar bg="light" variant="light" fixed="bottom">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Navbar.Text className="text-right">Copyright © 2023 Example Company</Navbar.Text>
      </Container>
    </Navbar>
  );
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <h1 className="text-center">Welcome to Our Landing Page</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tellus vel felis vestibulum, in aliquet justo aliquet.
        </p>
        <p className="text-center">
          <Button variant="primary">Learn More</Button>
        </p>
        <Wakaf />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;