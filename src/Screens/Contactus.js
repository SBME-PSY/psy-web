import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { faArrowLeft , faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactus from '../assets/Img/undraw_contact_us_15o2.svg';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_87wzmis', e.target, 'user_mMyxDqspXtK4i5hHXQtpA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
const Contact=()=>{
    return(
        <Container >
            <h1 className="my-5 text-center text-dark">Send Us what you via an Email</h1>
            <Row className="my-5">
                <Col xs={12} className="d-flex flex-column justify-content-center align-items-center" md={6}>
                        <img className="rounded-circle border border-2 border-warning" width="320px" height="320px" alt="svg of a person" src={contactus}></img>
                </Col>
                <Col xs={12} md={6}>
                    <Form  onSubmit={sendEmail} className="py-5">
                        <FormGroup className="my-3">
                            <Label for="exampleEmail">Your Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="JohnDoe@expample.com" />
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label>Your Name</Label>
                            <Input type="text" name="name" placeholder="ex: John Doe"></Input>
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label>Subject</Label>
                            <Input type="text" name="subject"></Input>
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea"  name="message" />
                        </FormGroup>
                        <Button type="submit" className="btn btn-warning rounded-pill px-5">Send <FontAwesomeIcon icon={faPaperPlane} /></Button>
                        <Button className="btn btn-danger rounded-pill m-5 position-fixed bottom-0 end-0"><Link to="/"><FontAwesomeIcon color="white" icon={faArrowLeft} /></Link></Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;