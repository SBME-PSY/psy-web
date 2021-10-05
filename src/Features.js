import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Features=({features})=>{
    return(
        
        <Container id="Features" className="my-5">
            <Button className="btn btn-primary rounded-pill m-5 position-fixed bottom-0 end-0"><Link className="text-decoration-none text-white" to="/src/Contactus.js" target="_blank" rel="noopener noreferrer">Contact Us <FontAwesomeIcon icon={faMailBulk}/></Link></Button>
            <h1 id="feature-header" className="text-center mb-5">Through Psy-Awareness You can do the following:</h1>
            <Row className="mt-5 d-flex justify-content-center">
            {features.map((item,id_name,color_class)=> {
                if(item.id % 2 === 0){
                    id_name = "feature-even";
                    color_class = "feature-odd-color";
                }
                else{
                    color_class="feature-even-color";
                    id_name = "feature-odd";
                };
                return(
                <Col xs={12} md={6} lg={4} key={item.id} id={id_name} className="mt-4 mx-3">
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