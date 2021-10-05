import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row , Col } from "reactstrap";

const Feedback=({clients_feedback})=>{
    return(
        <Container id="Feedback" className="py-5 my-5">
            <h1 className="text-danger text-center mb-5">Users feedback</h1>
            <Row className="mt-3 d-flex justify-content-center">
            {clients_feedback.map((item)=>{
                    return(
                        <Col xs={12} md={6} lg={4} className="mx-3 my-3" key={item.id} id="client-feedback" >
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