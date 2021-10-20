import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Col, Row} from "reactstrap";

const Download = ({mobile_app,google_play,app_store})=>{
    return(
        <Container id="Download" className="py-5 my-5">
            <Row>
                <Col xs={12} className="my-5" md={6} >
                    <img width="100%" src={mobile_app} alt="a person looking at a giant phone"></img>
                </Col>
                <Col xs={12} className="my-auto" md={6} >
                        <h2 id="download-app">You can Download Our App through Google play or App store</h2>
                        <div id="stores" >
                            <a className="d-block text-center" href="https://www.google.com/"><img  width="200px"  src={google_play} alt="google play store link"></img></a>
                            <a  className="d-block text-center" href="https://www.google.com/"><img  src={app_store} width="250px" alt="Apple app store link" ></img></a>
                        </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Download;