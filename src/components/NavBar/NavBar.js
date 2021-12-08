import s from './NavBar.module.css';
import Logo from '../../images/Logotype.png';
// import { ReactComponent as Close } from '../../images/svg/Close.svg';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default function NavBarMobile() {
  return (
    <header className={s.container}>
      <div className={s.bg}></div>
      <Navbar bg="white" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" className={s.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            styles="navbar-toggler-icon"
          ></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#about">About us</Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown title="Our services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Lorem ipsum
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <Nav.Link href="#contactUs">Contact us</Nav.Link>
              <NavDropdown.Divider />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
