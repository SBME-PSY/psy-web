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
    <div className="container">
      <Navbar
        id="navbar"
        color="light"
        className="fixed-top shadow-lg"
        light
        expand="md"
      >
        <Container fluid>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavbarBrand id="brand" href="/">
              Psy-Awareness
            </NavbarBrand>
            <Nav id="nav" className="px-2" navbar>
              <NavItem className="hvr-grow">
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Features')}
                >
                  About the app
                </NavLink>
              </NavItem>
              <NavItem className="hvr-grow">
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#AboutUs')}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="hvr-grow">
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Download')}
                >
                  Download
                </NavLink>
              </NavItem>
              <NavItem className="hvr-grow">
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#OurDoctors')}
                >
                  Our Doctors
                </NavLink>
              </NavItem>
              <NavItem className="hvr-grow">
                <NavLink
                  className="fs-6"
                  onClick={() => window.location.replace('/#Feedback')}
                >
                  FeedBack
                </NavLink>
              </NavItem>
              <NavItem className="hvr-grow">
                <Link className="fs-6 nav-item fs-6 nav-link" to="/VdieoChat">
                  Group Therapy
                </Link>
              </NavItem>
            </Nav>
            {!state.user ? (
              <>
                <Link className="regstiration hvr-grow" to="/Register">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={hendelLogout}
                  className="regstiration hvr-grow"
                  to="/"
                >
                  LogOut
                </Link>
              </>
            )}{' '}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
