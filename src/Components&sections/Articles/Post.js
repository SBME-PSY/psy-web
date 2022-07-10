import React, { memo } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';
function Post({ data }) {
  return (
    <Wrapper>
      <Row className="container-post">
        <Col xs="auto">
          <img src={data.author.picture} alt="k" className="author-post" />
        </Col>
        <Col className="autor-info">
          <b>{data.author.name}</b>
          <span>
            • <ReactTimeAgo date={data.createdAt} locale="en-US" />
          </span>
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
