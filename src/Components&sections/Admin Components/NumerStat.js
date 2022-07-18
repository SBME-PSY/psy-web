import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { GiBookmarklet } from 'react-icons/gi';
import { RiPsychotherapyFill } from 'react-icons/ri';

function NumerStat({ numUsers, numDoctors, numTestTaken, numTestTakenUnique }) {
  return (
    <Wrapper>
      <h4> Numerical Statistics</h4>

      <main>
        <Row className="justify-content-between">
          <Col className="numstat mx-1" md="3">
            <div className="icon-stat statnum1">
              <AiOutlineUser />
            </div>
            <div className="stat-num">
              <span>{numUsers}</span>
              <p>Users</p>
            </div>
          </Col>
          <Col className="numstat  mx-1" md="3">
            <div className="icon-stat statnum2">
              <GiBookmarklet />
            </div>
            <div className="stat-num">
              <span>{numDoctors}</span>
              <p>Doctors</p>
            </div>
          </Col>
          <Col className="numstat  mx-1" md="3">
            <div className="icon-stat statnum3">
              <RiPsychotherapyFill />
            </div>
            <div className="stat-num">
              <span>{numTestTaken}</span>
              <p>Tests taken</p>
            </div>
          </Col>
          <Col className="numstat  mx-1" md="3">
            <div className="icon-stat statnum4">
              <RiPsychotherapyFill />
            </div>
            <div className="stat-num">
              <span>{numTestTakenUnique}</span>
              <p>Unique tests taken</p>
            </div>
          </Col>
        </Row>
      </main>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  main {
    margin-bottom: 20px;
    .numstat {
      margin-bottom: 10px;
      background-color: #1619250a;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        text-align: center;
        p {
          margin-bottom: 0px !important;
        }
      }
      .icon-stat {
        padding: 15px;
        border-radius: 50%;
        svg {
          font-size: 20px;
        }
      }
      .statnum1 {
        svg {
          color: #5470c6;
        }
        background-color: #5470c645;
      }
      .statnum2 {
        svg {
          color: #ee6666;
        }
        background-color: #ee666636;
      }
      .statnum3 {
        svg {
          color: #3ba272;
        }
        background-color: #3ba27254;
      }
      .statnum4 {
        svg {
          color: #fac858;
        }
        background-color: #fac85833;
      }
      .stat-num {
        span {
          color: #161925;
          font-size: 40px;
        }
      }
    }
  }
`;

export default NumerStat;
