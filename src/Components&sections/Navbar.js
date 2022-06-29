import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const state = useSelector((state) => state);
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  const hendelLogout = () => {
    dispatch({ type: 'UPDATE_USER', pyload: '' });
    setCookie('jwt', '', new Date(Date.now + 3 * 1000));
    setCookie('user', '', new Date(Date.now + 3 * 1000));
  };
  return (
    <div>
      <Navbar
        id="navbar"
        color="light"
        className="fixed-top shadow-lg"
        light
        expand="md"
      >
        <Container fluid>
          <NavbarBrand id="brand" href="/">
            Psy-Awareness
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav id="nav" className="px-2" navbar>
              <NavItem>
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Features')}
                >
                  About the app
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#AboutUs')}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Download')}
                >
                  Download
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#OurDoctors')}
                >
                  Our Doctors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Feedback')}
                >
                  FeedBack
                </NavLink>
              </NavItem>
              <NavItem>
                <Link className="fs-6 nav-item fs-6 nav-link" to="/VdieoChat">
                  Group Therapy
                </Link>
              </NavItem>
              <section></section>
              {!state.user ? (
                <NavItem>
                  <Link className="fs-6 nav-item fs-6 nav-link" to="/Register">
                    Register
                  </Link>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <Link
                      onClick={hendelLogout}
                      className="fs-6 nav-item fs-6 nav-link"
                      to="/"
                    >
                      LogOut
                    </Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
