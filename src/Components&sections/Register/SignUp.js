import axios from 'axios';
import React, { useState, memo } from 'react';
import { FormGroup, Label, Form, Row, Col, Input, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { governorate } from '../../assets/data';
import { setCookie } from '../../assets/cookie';
import { maritalStatus, sex, role, specialization } from '../../assets/data';
function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Role, setRole] = useState();
  const [url, setUrl] = useState('/psy/users/signup');
  const [CV, setCV] = useState('');

  const handleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value === 'doctor') {
      setUrl('/psy/doctors/signup');
    } else {
      setUrl('/psy/users/signup');
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('singup-form');
    const formData = new FormData(form);
    let data = {};
    for (var el of formData.entries()) {
      data[el[0]] = el[1];
    }
    if (Role === 'doctor') {
      data['cvFile'] = CV;
    }
    axios({
      url: url,
      method: 'post',
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
    <Form onSubmit={handelSubmit} className="py-3" id="singup-form">
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
        <Col md={6}>
          <FormGroup>
            <Label for="role-login" sm={2}>
              Sex
            </Label>
            <Input id="role-login" name="sex" type="select">
              {sex.map((el) => {
                return <option>{el}</option>;
              })}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="role-login" sm={2}>
              Maritalstatus
            </Label>
            <Input id="role-login" name="maritalStatus" type="select">
              {maritalStatus.map((el) => {
                return <option>{el}</option>;
              })}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="role-login" sm={2}>
              Role
            </Label>
            <Input
              id="role-login"
              name="role"
              type="select"
              value={Role}
              onChange={handleChange}
            >
              {role.map((el) => {
                return <option>{el}</option>;
              })}
            </Input>
          </FormGroup>
        </Col>
        {Role === 'doctor' ? (
          <Col md={6}>
            <FormGroup>
              <Label for="role-login" sm={2}>
                Governorate
              </Label>
              <Input id="role-login" name="governorate" type="select">
                {governorate.map((city) => {
                  return <option>{city}</option>;
                })}
              </Input>
            </FormGroup>
          </Col>
        ) : (
          ''
        )}
      </Row>
      <Row>
        {Role === 'doctor' ? (
          <>
            <Col md={6}>
              <FormGroup>
                <Label for="role-login" sm={2}>
                  Specialization
                </Label>
                <Input id="role-login" name="specialization" type="select">
                  {specialization.map((el) => {
                    return <option>{el}</option>;
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Row>
                  <Col md={2}>
                    <Label for="role-login">CV</Label>
                  </Col>
                  <Col md={10}>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => setCV(base64)}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </>
        ) : (
          ''
        )}
      </Row>
      <Row className="justify-content-center ">
        <Button
          className="my-5 w-50 r btn-success rounded-pill"
          onClick={handelSubmit}
        >
          Sign Up
        </Button>
      </Row>
    </Form>
  );
}

// const Wrapper = styled.div``;
export default memo(SignUp);
