import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "reactstrap";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import 'aos/dist/aos.css'; 
Aos.init({
    disable: 'phone', 
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in',
}
);
const Ourdoctors=({our_doctors})=>{
    return(
        <Container id="OurDoctors" className="mt-5">
            <h1 data-aos="fade-in" className="text-center text-danger">Our Doctors</h1>
            <Row className="mt-3 d-flex justify-content-center">
                {our_doctors.map((item,id_name,data)=>{
                    if(item.id %2 === 0){
                        id_name="doctors-even";
                        data="flip-right";
                    }
                    else{
                        id_name="doctors-odd";
                        data="flip-left";
                    }
                    return(
                        <Col data-aos={data} xs={12} md={6} lg={4} className="mx-2 my-4" key={item.id} id={id_name}>
                            <FontAwesomeIcon size="3x" className="mb-4" color="#FEFDFF" icon={faUser}/>
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