import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col } from "reactstrap";
import Aos from "aos";
import 'aos/dist/aos.css'; 
Aos.init({
    disable: 'phone', 
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in',
}
);

const Feedback=({clients_feedback})=>{
    return(
        <Container id="Feedback" className="py-5 my-5">
            <h1 data-aos="fade-in" className="text-danger text-center mb-5">Users feedback</h1>
            <Row className="mt-3 d-flex justify-content-center">
            {clients_feedback.map((item,data)=>{
                    item.id % 2 ===0 ? data="flip-right" : data="flip-left";
                    return(
                        <Col data-aos={data }  xs={12} md={6} lg={4} className="mx-3 my-3" key={item.id} id="client-feedback" >
                            <p className="text-dark text-center">{item.feedback}</p>
                            <h5 className="text-dark text-center">{item.name}</h5>
                        </Col>
                    )
            })}
            </Row>
        </Container>
    )
}
export default Feedback;