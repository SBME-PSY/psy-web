import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
function Post(props) {
  return (
    <Wrapper>
      <Row className="container-post">
        <Col xs="auto">
          <img
            src="https://social.webestica.com/assets/images/avatar/04.jpg"
            alt="k"
            className="author-post"
          />
        </Col>
        <Col className="autor-info">
          <b>name</b>
          <span>• 12hr</span>
          <p>jobTitle</p>
          <div>body</div>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  margin-top: 20px;
  .container-post {
    .author-post {
      width: 40px;
      height: 40px;
      padding: 1px;
      border-radius: 50%;
      border: 1px solid var(--green500);
    }
    .autor-info {
      b {
        text-transform: capitalize;
      }
      span {
        margin-left: 10px;
        font-size: small;
        color: #8b8e92;
      }
      p {
        font-size: small;
        color: #8b8e92;
      }
    }
  }
`;
export default Post;
