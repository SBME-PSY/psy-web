import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';
function Post({ data }) {
  console.log(data);
  //   "data": [
  //     {
  //         "_id": "62c8bdb9d745d1761afaa467",
  //         "title": "This is art",
  //         "body": "And this is the body of the article.",
  //         "rating": 0,
  //         "author": {
  //             "_id": "62c8bc6ecbe19e6cad3b948c",
  //             "name": "John Doe",
  //             "specialization": "Psychology Teacher",
  //             "picture": "https://ui-avatars.com/api/?rounded=true&background=fff&size=512&name=John+Doe",
  //             "clinics": [],
  //             "id": "62c8bc6ecbe19e6cad3b948c"
  //         },
  //         "createdAt": "2022-07-08T23:28:57.133Z",
  //         "updatedAt": "2022-07-08T23:28:57.133Z"
  //     }
  // ],
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
  padding: 20px;
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
