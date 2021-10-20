import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "reactstrap";

const Aboutus=({aboutus})=>{
    return(
        <div className="clip-border">
            <Container id="AboutUs" className="py-5 my-5">
                <Row>
                    <Col xs={12}  md={6} >
                        <h2 id="aboutus">About Us</h2>
                        <p id="info">
                        We are a company that aims to provide psychological welfare to every one by just a click of a button.  We do that by connecting you and our team of doctors and professionals through our online therapy and clincal visits or by Keeping you in a better state, widening your horizon, and increasing your knowledge through our tests and articles. Our doctors are specialized in many fields and will help you no matter the problem
                        </p>
                    </Col>
                    <Col xs={12}  md={6}>
                        <img width="100%" height="100%" src={aboutus} alt="list of fictional employees"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutus;