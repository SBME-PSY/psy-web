import '../../App.css';
import React, { useState } from 'react';
import adminImage from '../../assets/Img/admin.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { Link } from 'react-router-dom';
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
        expand="lg"
      >
        <Container fluid>
          <NavbarBrand id="brand" href="/">
            Psy-Awareness
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
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

              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="margin-left-anim">
                    <Link
                      className="fs-6 nav-item fs-6 nav-link "
                      to="/VdieoChat"
                    >
                      Group Therapy
                    </Link>
                  </DropdownItem>
                  <DropdownItem className="margin-left-anim">
                    <Link
                      className="fs-6 nav-item fs-6 nav-link "
                      to="/articles"
                    >
                      Articles
                    </Link>
                  </DropdownItem>
                  {state.user.role === 'doctor' ? (
                    <DropdownItem className="margin-left-anim">
                      <Link
                        className="fs-6 nav-item fs-6 nav-link "
                        to="/Addtest"
                      >
                        Add Test
                      </Link>
                    </DropdownItem>
                  ) : (
                    ''
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <div className="float-left">
              {!state.user ? (
                <>
                  <Link
                    className="fs-6 nav-item fs-6  hvr-grow regstiration"
                    to="/Register"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="fs-6 nav-item fs-6  hvr-grow regstiration "
                    onClick={hendelLogout}
                    to="/"
                  >
                    LogOut
                  </Link>{' '}
                  {state.user.role === 'admin' ? (
                    <img src={adminImage} alt="phot" className="profile-pic" />
                  ) : (
                    <img
                      src={state.user.picture}
                      alt="phot"
                      className="profile-pic"
                    />
                  )}
                </>
              )}{' '}
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
