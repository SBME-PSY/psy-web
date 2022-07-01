import React, { useState, memo } from 'react';
import { FormGroup, Label, Form, Col, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function LogIn(props) {
  const [url, setUrl] = useState('/psy/users/login');
  const [Role, setRole] = useState('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value === 'doctor') {
      setUrl('/psy/doctors/login');
    } else {
      setUrl('/psy/users/login');
    }
  };
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  const handelSubmit = (e) => {
    console.log(url);
    e.preventDefault();
    const form = document.getElementById('login-form');
    const formData = new FormData(form);
    axios({
      method: 'POST',
      url: url,
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
        dispatch({ type: 'UPDATE_LOGGED_IN', pyload: true });
        navigate('/');
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch({ type: 'UPDATE_ERR', pyload: err.response.data.message });
      });
  };
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
          <Input
            id="role-login"
            name="role"
            type="select"
            value={Role}
            onChange={handleChange}
          >
            <option>user</option>
            <option>doctor</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col>
          <Button>Log in</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default memo(LogIn);
