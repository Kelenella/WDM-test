import s from './NavBar.module.css';
import { ReactComponent as Logo } from '../../images/svg/Express.svg';
// import { ReactComponent as Close } from '../../images/svg/Close.svg';
import LightButton from '../Buttons/LightButton/LightButton';

import { ReactComponent as Menu } from '../../images/svg/Menu.svg';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default function NavBarMobile() {
  return (
    <header className={s.header}>
      <div className={s.bg}></div>
      <div className={s.bg2}></div>
      <div className={s.wrapper}>
        <Navbar bg="blue" expand="xl" className="navbar ">
          <Container>
            <Navbar.Brand href="#home">
              <Logo className={s.logo} />
            </Navbar.Brand>
            <div className={s.btn}>
              {' '}
              <LightButton text="Call us" type="button" />
            </div>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              styles="navbar-toggler"
              className={s.toggle}
            >
              <Menu />
              {/* <Close /> */}
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="nav-link.active">
                  Home
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link href="#about" className="nav-link.active">
                  About us
                </Nav.Link>
                <NavDropdown.Divider />
                <NavDropdown
                  title="Our services"
                  id="basic-nav-dropdown"
                  className="nav-link.active"
                >
                  <NavDropdown.Item href="#services/1" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/2" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/3" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/4" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="services/5" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/6" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/7" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#services/8" className={s.option}>
                    Lorem ipsum
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link
                  href="#contactUs"
                  className="nav-link nav-link.active"
                >
                  Contact us
                </Nav.Link>
                <NavDropdown.Divider />
              </Nav>
            </Navbar.Collapse>
            <div className={s.desktopBtn}>
              {' '}
              <LightButton text="Call us" type="button" />
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
