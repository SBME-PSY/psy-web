import React, { useState, memo } from 'react';
import { FormGroup, Label, Form, Col, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCookie } from '../../assets/cookie';

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
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('login-form');
    const formData = new FormData(form);
    let data = {};
    for (var el of formData.entries()) {
      data[el[0]] = el[1];
    }

    axios({
      method: 'POST',
      url: url,
      data: data,
    })
      .then((res) => {
        const token = res.data.token;
        const user = JSON.stringify(res.data.data);
        setCookie('jwt', token, 90);
        setCookie('user', user, 90);
        dispatch({
          type: 'UPDATE_USER',
          pyload: JSON.parse(user),
        });
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
