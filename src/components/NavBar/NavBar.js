import s from './NavBar.module.css';
import { ReactComponent as Logo } from '../../images/svg/Express.svg';
import { ReactComponent as Close } from '../../images/svg/Close.svg';
import { ReactComponent as Menu } from '../../images/svg/Menu.svg';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default function NavBarMobile() {
  return (
    <header className={s.header}>
      <div className={s.bg}></div>
      <Navbar
        bg="white"
        expand="md"
        className="align-content-xxl-center"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo className={s.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            styles="navbar-toggler-icon"
            className={s.toggle}
          >
            {<Menu /> ? <Menu /> : <Close />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#about">About us</Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown title="Our services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#services/1">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/2">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/3">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/4">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="services/5">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/6">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/7">
                  Lorem ipsum
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/8">
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
