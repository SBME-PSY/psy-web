import React from 'react';
import { FormGroup, Label, Form, Col, Input, Button } from 'reactstrap';
import axios from 'axios';
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
const handelSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById('login-form');
  const formData = new FormData(form);
  axios({
    method: 'POST',
    url: '/psy/users/logIn',
    data: {
      email: formData.get('email'),
      password: formData.get('password'),
      role: formData.get('role'),
    },
  })
    .then((res) => {
      const token = res.data.token;
      const user = JSON.stringify(res.data.data);
      setCookie('jwt', token, 90);

      setCookie('user', user, 90);
    })
    .catch((err) => {
      console.log(err);
    });
};
function LogIn(props) {
  return (
    <Form onSubmit={handelSubmit} id="login-form">
      <FormGroup row>
        <Label for="email-login" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            id="email-login"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password-login" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            id="password-login"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="role-login" sm={2}>
          Role
        </Label>
        <Col sm={10}>
          <Input id="role-login" name="role" type="select">
            <option>user</option>
            <option>doctor</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default LogIn;
