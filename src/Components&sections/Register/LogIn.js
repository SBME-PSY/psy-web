import React, { useState, memo } from 'react';
import { FormGroup, Label, Form, Col, Input, Button, Row } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCookie } from '../../assets/cookie';
import { role } from '../../assets/data';
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
        console.log(err);
        if (err.response) {
          dispatch({
            type: 'UPDATE_ERR',
            pyload: err.response.data.message,
          });
        } else {
          dispatch({
            type: 'UPDATE_ERR',
            pyload: 'sorry there are problem in server try again later',
          });
        }
      });
  };
  return (
    <Form onSubmit={handelSubmit} id="login-form">
      <FormGroup>
        <Row className="w-100 ">
          <Label for="email-login" sm={2}>
            Email
          </Label>
        </Row>
        <Row className="w-100 px-2">
          <Input
            id="email-login"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
        </Row>
      </FormGroup>
      <FormGroup className="my-2">
        <Row className="w-100">
          <Label for="password-login">Password</Label>
        </Row>
        <Row className="w-100 px-2">
          <Input
            id="password-login"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </Row>
      </FormGroup>
      <FormGroup className="mt-2">
        <Row className="w-100">
          <Col sm="12" md="1">
            <Label for="role-login">Role</Label>
          </Col>
          <Col sm="12" md="11">
            <Input
              id="role-login"
              name="role"
              type="select"
              value={Role}
              onChange={handleChange}
            >
              {role.map((el, index) => {
                return <option key={index}>{el}</option>;
              })}
            </Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup check>
        <Row className="justify-content-center ">
          <Button
            className="my-5 w-50 btn-success rounded-pill"
            onClick={handelSubmit}
          >
            Log in
          </Button>
        </Row>
      </FormGroup>
    </Form>
  );
}

export default memo(LogIn);
