import React, { useState } from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col ,Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import { faHome , faPaperPlane ,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactus from '../assets/Img/undraw_contact_us_15o2.svg';
import emailjs from 'emailjs-com';

const Contact=()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setsubject] = useState('');
    const [message,setMessage] = useState('');

    const [messageSent,setMessageSent] = useState(false);
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_53wnmq8','template_155gtm7',e.target,'user_mMyxDqspXtK4i5hHXQtpA')
        .then(res=>{
            console.log(res);
            setMessageSent(true);
            setTimeout(function(){
                setMessageSent(false);
                setName('');
                setsubject('');
                setEmail('');
                setMessage('');
            },2500)
        }).catch(err=>{
            console.log(err);
        });
    }
    return(
        <Container >
            {messageSent && <Alert color="success"><span className="text-center shadow-lg top-0"><FontAwesomeIcon icon={faCheckCircle} /> Your message has been sent </span></Alert>}
            <h1 className="my-5 text-center text-dark">Send Us what you via an Email</h1>
            <Row className="my-5">
                <Col xs={12} className="d-flex flex-column justify-content-center align-items-center" md={6}>
                        <img className=" rounded-circle border border-2 border-warning" width="320px" height="320px" alt="svg of a person" src={contactus}></img>
                </Col>
                <Col xs={12} md={6}>
                    <Form  onSubmit={sendEmail} className="py-5">
                        <FormGroup className="my-3">
                            <Label>Your Name</Label>
                            <Input value={name} type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="ex: John Doe"></Input>
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label for="exampleEmail">Your Email</Label>
                            <Input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="exampleEmail" placeholder="JohnDoe@expample.com" />
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label>Subject</Label>
                            <Input type="text" value={subject} onChange={(e)=>setsubject(e.target.value)} name="subject"></Input>
                        </FormGroup>
                        <FormGroup className="my-3">
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" value={message}  name="message" onChange={(e)=>setMessage(e.target.value)} />
                        </FormGroup>
                        <Button type="submit" className="btn btn-warning rounded-pill px-5" id="TooltipExample">Send <FontAwesomeIcon icon={faPaperPlane} /></Button>
                        <Button className="btn btn-danger rounded-pill m-5 position-fixed bottom-0 end-0"><Link to="/"><FontAwesomeIcon color="white" icon={faHome} /></Link></Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;