import React, { useState } from 'react';
import {
  TabContent,
  Nav,
  Container,
  NavItem,
  NavLink,
  Col,
  Row,
  TabPane,
} from 'reactstrap';
import Psychologist from '../assets/Img/Psychologist.jpg';
import LogIn from '../Components&sections/Register/LogIn';
import SignUp from '../Components&sections/Register/SignUp';
import styled from 'styled-components';
import ErrorPage from '../Components&sections/HomeSections/ErrorPage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

function Register(props) {
  const navigate = useNavigate();
  const err = useSelector((state) => state.err);
  const [regState, setRegState] = useState('login');

  return (
    <Wrapper>
      {err ? <ErrorPage /> : ''}
      <Container id='reg-container'>
        <Container  className='px-2 w-100 '>
          <Row className='py-3'>
            <Col  sm='2' md='5'>
              <div className='back-btn'>
                <BsFillArrowLeftCircleFill style={{cursor:'pointer'}}  onClick={() => {
                  navigate('/', { replace: true });
                }} />
              </div>  
            </Col>
            <Col  sm='10' md='7' >
              <h2 className='title'
                onClick={() => {
                  navigate('/', { replace: true });
                }}
              >
                Psy-Awareness
              </h2>
            </Col>
          </Row>
          <Nav tabs className=' pt-4 justify-content-center'>
            <Row>
              <Col>
                <NavItem>
                  <NavLink
                    className={regState === 'login' ? 'active' : ''}
                    onClick={() => setRegState('login')}
                  >
                    Login
                  </NavLink>
                </NavItem>
              </Col>
              <Col>
              <NavItem>
                <NavLink
                  className={regState !== 'login' ? 'active' : ''}
                  onClick={() => setRegState('signup')}
                >
                    Singup
                  </NavLink>
                </NavItem>
              </Col>
            </Row>
          </Nav>
          <TabContent activeTab={regState}>
            <TabPane tabId="login">
              <LogIn />
            </TabPane>
            <TabPane tabId="signup">
              <SignUp />
            </TabPane>
          </TabContent>
        </Container>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20vh 2% 0 2%;
  background: url(${Psychologist});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover ;
  height: 100vh;
`;
export default Register;
