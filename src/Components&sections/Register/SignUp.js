import axios from 'axios';
import React from 'react';
import { FormGroup, Label, Form, Row, Col, Input, Button } from 'reactstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('singup-form');
    const formData = new FormData(form);
    console.log();
    axios({
      url: '/psy/users/signup',
      method: 'post',
      data: {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        role: formData.get('role'),
        sex: formData.get('sex'),
        phone: formData.get('phone'),
        age: formData.get('age'),
        maritalStatus: formData.get('maritalstatus'),
      },
    })
      .then((res) => {
        const token = res.data.token;
        const user = JSON.stringify(res.data.data);
        setCookie('jwt', token, 90);
        setCookie('user', user, 90);
        dispatch({ type: 'UPDATE_LOGGED_IN', pyload: true });
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <Form onSubmit={handelSubmit} id="singup-form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input
                id="examplePassword"
                name="email"
                placeholder="password placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input
                id="exampleEmail"
                name="password"
                placeholder="with a placeholder"
                type="password"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input
                id="examplePassword"
                name="confirmPassword"
                placeholder="password placeholder"
                type="Confirm Password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Phone</Label>
              <Input
                id="examplePassword"
                name="phone"
                placeholder="phone"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Age</Label>
              <Input
                id="examplePassword"
                name="age"
                placeholder="age"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="role-login" sm={2}>
                Sex
              </Label>
              <Input id="role-login" name="sex" type="select">
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="role-login" sm={2}>
                Maritalstatus
              </Label>
              <Input id="role-login" name="maritalstatus" type="select">
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Seperated</option>
                <option>Engaged</option>
                <option>Widowed</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="role-login" sm={2}>
                Role
              </Label>
              <Input id="role-login" name="role" type="select">
                <option>user</option>
                <option>doctor</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button>Sign Up</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default SignUp;
