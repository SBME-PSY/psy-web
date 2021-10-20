import React from "react"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
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



const Features=({features})=>{
    return(
        
        <Container id="Features" className="py-5 my-5">
            <Button id="contact-btn" className="btn px-3 btn-success rounded-pill m-5 position-fixed bottom-0 end-0"><Link className="fs-5 text-decoration-none text-white" to="/Contact" target="_blank" rel="noopener noreferrer">Contact Us <FontAwesomeIcon icon={faMailBulk}/></Link></Button>
            <h1 data-aos="fade-in" id="feature-header" className="text-center mb-5">Through Psy-Awareness You can do the following:</h1>
            <Row className="mt-5 d-flex justify-content-center">
            {features.map((item,id_name,color_class,data)=> {
                if(item.id % 2 === 0){
                    id_name = "feature-even";
                    color_class = "feature-odd-color";
                    data="flip-right";
                }
                else{
                    color_class="feature-even-color";
                    id_name = "feature-odd";
                    data="flip-left";
                };
                return(
                <Col data-aos={data} xs={12} md={6} lg={4} key={item.id} id={id_name} className="mt-4  mx-3">
                    <img width="250px" height="200px" className="mt-5" src={item.imagesrc} alt='group text chat'></img>
                    <p width="40%" className={color_class.concat(" text-center pt-5 mt-5")} >{item.caption}</p>
                </Col>
                )
            })}
            </Row>
        </Container>
    )
}
export default Features;