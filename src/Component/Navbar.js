import logo from '../pic/Logo-Badan-Wakaf-Indonesia-White.png';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

const Navibar = () => {
  return (
    <Navbar bg='primary' variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
          <Nav.Link href="#link">Artikel</Nav.Link>
          <NavDropdown title="Data" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Nazhir</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Grafik
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Literasi" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Wakaf</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Sejarah Wakaf
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Wakaf Tanah
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Sejarah Uang
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navibar;
