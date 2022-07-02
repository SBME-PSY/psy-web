import React, { useState } from 'react';
import {
  TabContent,
  Nav,
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
      <main>
        <section>
          <div className="header-sign">
            <button
              onClick={() => {
                navigate('/', { replace: true });
              }}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <h2
              onClick={() => {
                navigate('/', { replace: true });
              }}
            >
              Psy-Awareness
            </h2>
          </div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={regState === 'login' ? 'active' : ''}
                onClick={() => setRegState('login')}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={regState !== 'login' ? 'active' : ''}
                onClick={() => setRegState('signup')}
              >
                Singup
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={regState}>
            <TabPane tabId="login">
              <Row>
                <Col sm="12">
                  <LogIn />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="signup">
              <Col sm="12">
                <SignUp />
              </Col>
            </TabPane>
          </TabContent>
        </section>
      </main>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: url(${Psychologist});
  background-repeat: no-repeat;
  background-size: cover;
  height: 140vh;
  .header-sign {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    button {
      background: none;
      border: none;
      color: #6c757d;
      font-size: 25px;
      :hover {
        color: var(--gray500);
      }
    }
  }
  .row .form-group {
    padding: 10px 0;
  }
  main {
    h2 {
      font-family: 'Rancho', cursive;
      cursor: pointer;
      color: rgb(0 0 0 / 0.5);
      text-align: center;
      margin-bottom: 0px;
    }
  }
  .nav-item a {
    color: black;
  }
  section {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    width: 50%;
    min-width: 400px;
    margin: auto;
    position: relative;
    top: 60px;
    padding: 10px;
  }
  @media (max-width: 760px) {
    .row .form-group {
      padding: 0px;
    }
    section {
      top: 10px;
    }
    main {
      h1 {
        top: 5px;
      }
    }
  }
`;
export default Register;
