import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "reactstrap";
import { faInstagram , faTwitter , faFacebook , faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Footer=({google_play,app_store})=>{
    return(
        <footer className="mt-5">
            <Container>
            <Row className="py-5">
                <Col xs={12} md={6} className="py-3 px-5"  lg={4}>
                    <ul>
                        <li className='fs-3 my-3'><Link className="text-decoration-none text-white" to="/Termsandconditions">Terms and Conditions</Link></li>
                        <li  className='fs-3 my-3'><Link className="text-decoration-none text-white" to='/Privacyandpolicy'>Privecy and Policy</Link></li>
                        <li  className='fs-3 my-3'><Link className="text-decoration-none text-white" to="/Contact">Contact Us</Link></li>
                    </ul>
                </Col>
                <Col xs={12} md={6} className="px-5 py-3"  lg={4}>
                    <h3 className="pb-3 border-bottom border-2 text-white border-white">Follow Us</h3>
                    <ul className='d-flex  align-content-start flex-column'>
                        <li className=' fs-3 my-3'><a className="text-decoration-none text-white" href="https://www.instagram.com/">Instegram <FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li className='fs-3 my-3'><a className="text-decoration-none text-white" href="https://twitter.com/?lang=en">Twitter <FontAwesomeIcon icon={faTwitter} /> </a></li>
                        <li className='fs-3 my-3 '><a href="https://www.linkedin.com/" className="text-decoration-none text-white">Linkedin <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                        <li className='fs-3 my-3 '><a href="https://www.facebook.com/" className="text-decoration-none text-white">Facebook <FontAwesomeIcon icon={faFacebook} /> </a></li>
                    </ul>
                </Col>
                <Col xs={12} md={6}  lg={4}  className="px-5 py-3">
                    <h3 className="pb-3 border-bottom border-2 text-white border-white">Download the App</h3>
                    <div className="d-flex flex-column justify-content-start align-content-start">
                            <a className="d-block text-center" href="https://www.google.com/"><img  width="200px"  src={google_play} alt="google play store link"></img></a>
                            <a  className="d-block text-center" href="https://www.google.com/"><img src={app_store} width="250px" alt="Apple app store link" ></img></a>
                    </div>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}

export default Footer;