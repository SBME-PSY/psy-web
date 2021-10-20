import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Adminsignin=()=>{
    const [passwordShowen,setPasswordShown]= useState('password');
    return(
        <Container id="Admin-login" className='d-flex flex-column justify-content-center align-items-center my-5 py-5'>
            <div className='rounded-pill border-white p-5 border border-2'>
                <FontAwesomeIcon width="100%" height="100%" color="#fff" size="10x" icon={faUser}/>                
            </div>
            <h1  className='text-white mt-5'>Hello Admin !!!</h1>
            <span className="text-white">Please enter the Username & Password provided to you. </span>
            <Form className="mt-3">
                <FormGroup>
                    <Label for="admin-username" className="text-white my-3" >Username</Label>
                    <Input type='text' name="admin-username" id="admin-username"></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="text-white my-3" for="password">Password</Label>
                    <div className='d-flex flex-row justify-content-center' >
                    <Input type={passwordShowen} name="password" id="password" itemType="password"/>
                    <FontAwesomeIcon id="showPassword-icon" className="mt-2 mx-3"  onClick={()=>{
                        passwordShowen === 'password' ? setPasswordShown('text') : setPasswordShown('password');
                    }} icon={faEye} color="#fff"/>
                    </div>
                </FormGroup>
                <div className="d-flex flex-row justify-content-center">
                    <Button color="success" className="mt-4 px-5 rounded-pill"><Link className="text-decoration-none text-white" to="/AdminPanel">Login</Link></Button>
                </div>
            </Form>
        </Container>
    )
}

export default Adminsignin;