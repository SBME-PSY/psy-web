import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Adminsignin=()=>{
    const [passwordShowen,setPasswordShown]= useState('password');
    const [wrongCredintials,setWrongCredintials] = useState(false);
    const history = useHistory();
    const formik = useFormik({
        initialValues:{
            email: '',
            password:'',
            role:'admin'
        },
        onSubmit: values => {
            axios.post('/psy/admins/logIn',values,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(
                res =>{
                    console.log(res);
                    localStorage.setItem('AdminTokin',res.data.token);
                    console.log(localStorage.getItem('AdminTokin'));
                    history.push('/AdminPanel');
                }
            )
            .catch(
                err=>{
                    console.log(err);
                    setWrongCredintials(true);
                }
            )
        }
    })

    return(
        <Container id="Admin-login" className='d-flex flex-column justify-content-center align-items-center my-5 py-5'>
            <div className='rounded-pill border-white p-5 border border-2'>
                <FontAwesomeIcon width="100%" height="100%" color="#fff" size="10x" icon={faUser}/>                
            </div>
            <h1  className='text-white mt-5'>Hello Admin !!!</h1>
            <span className="text-white">Please enter the Username & Password provided to you. </span>
            <Form onSubmit={formik.handleSubmit} className="mt-3">
                <FormGroup>
                    <Label for="admin-Email" className="text-white my-3" >Email</Label>
                    <Input id='email' name='email' onChange={formik.handleChange} value={formik.values.email} type="email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label className="text-white my-3" for="password">Password</Label>
                    <div className='d-flex flex-row justify-content-center' >
                    <Input type={passwordShowen} name="password" id="password" onChange={formik.handleChange} value={formik.values.password} itemType="password"/>
                    <FontAwesomeIcon id="showPassword-icon" className="mt-2 mx-3"  onClick={()=>{
                        passwordShowen === 'password' ? setPasswordShown('text') : setPasswordShown('password');
                    }} icon={faEye} color="#fff"/>
                    </div>
                </FormGroup>
                {wrongCredintials && 
                                <Row className="mt-5">
                                    <h3 className="text-white fs-4 shake" >Password and Email Compination is not Valid</h3>
                                </Row>
                }
                <div className="d-flex flex-row justify-content-center">
                    <Button type="submit" color="success" className="mt-4 px-5 rounded-pill">Login</Button>
                </div>
            </Form>
        </Container>
    )
}


export default Adminsignin;