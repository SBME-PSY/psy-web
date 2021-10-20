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
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar id="navbar"  color="light" className="fixed-top shadow-lg" light expand="md">
        <Container fluid  >
            <NavbarBrand id="brand"  href="/">Psy-Awareness</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav id='nav' className="px-2" navbar>
                <NavItem>
                 <NavLink className="fs-6" onClick={()=> window.location.replace("/#Features")}>About the app</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-6" onClick={()=>window.location.replace("/#AboutUs")} >About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-6" onClick={()=>window.location.replace("/#Download")}>Download</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-6" onClick={()=>window.location.replace("/#OurDoctors")}>Our Doctors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="fs-6" onClick={()=>window.location.replace("/#Feedback")}>FeedBack</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
