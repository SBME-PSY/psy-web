import React, { memo } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
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
          <img src={data.author.picture} alt="k" className="author-post" />
        </Col>
        <Col className="autor-info">
          <b>{data.author.name}</b>
          <span>• 12hr</span>
          <p>{data.author.specialization}</p>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  max-width: 700px;
  margin: 20px auto;
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
export default memo(Post);
