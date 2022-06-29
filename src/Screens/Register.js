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
import LogIn from '../Components&sections/Register/LogIn';
import SignUp from '../Components&sections/Register/SignUp';
function Register(props) {
  const [regState, setRegState] = useState('login');
  return (
    <main id="fd">
      <section>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={regState === 'login' ? 'active' : ''}
              onClick={() => setRegState('login')}
            >
              login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={regState !== 'login' ? 'active' : ''}
              onClick={() => setRegState('signup')}
            >
              singup
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
  );
}

export default Register;
