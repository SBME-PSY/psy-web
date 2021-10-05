import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "reactstrap";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const doctors = [
    {
        "name": "John Doe",
        "specialization": "Specialized in Depression",
        "id":1
    },
    {
        "name": "Jane Doe",
        "specialization": "Specialized in Communication Disorders",
        "id":2
    },
    {
        "name": "Ahmed Galal",
        "specialization": "Specialized in Eating Disorders",
        "id":3
    },
    {
        "name": "Ahmed Essam Amir",
        "specialization": "Specialized in Personality Disorders",
        "id":4
    },
];



const Ourdoctors=()=>{
    return(
        <Container className="mt-5 px-5">
            <h1 className="text-center text-danger">Our Doctors</h1>
            <Row className="mt-3">
                {doctors.map((item,id_name)=>{
                    if(item.id %2 === 0){
                        id_name="doctors-even";
                    }
                    else{
                        id_name="doctors-odd";
                    }
                    return(
                        <Col xs={12} md={6} lg={4} key={item.id} id={id_name}>
                            <span id="fontawsome"><FontAwesomeIcon size="3x"  color="#FEFDFF" icon={faUser} /></span>
                            <h1 className="text-white text-center">{item.name}</h1>
                            <h4 className="text-white text-center">{item.specialization}</h4>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default Ourdoctors;