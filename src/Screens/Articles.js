import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ErrorPage from '../Components&sections/HomeSections/ErrorPage';
import { Button, Col, Row, Input, Container, Spinner } from 'reactstrap';
import Post from '../Components&sections/Articles/Post';
import Navigation from '../Components&sections/HomeSections/Navbar';
import WriteArticles from '../Components&sections/Articles/WriteArticles';
export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const err = useSelector((state) => state.err);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios({
      method: 'GET',
      url: '/psy/articles',
    })
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
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
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <Navigation />
        <div
          style={{ marginTop: '100px' }}
          className="d-flex flex-row align-content-center justify-content-center pt-10 bg-white"
        >
          <Spinner> </Spinner>
        </div>
      </>
    );
  }
  return (
    <Wrapper>
      <Navigation />

      {err ? (
        <h1 className="text-center  pt-5">
          Sorry! There while was a problem fetching your data
        </h1>
      ) : (
        <Container className="container-article">
          <Row className="header align-items-center justify-content-center">
            <Col xs="auto">
              <Button
                onClick={() => setIsOpen(true)}
                color="success"
                style={{ marginRight: '10px' }}
              >
                Write Article
              </Button>
              <Input
                style={{ display: 'inline', width: 'auto', maxWidth: '228px' }}
                className="search-box"
                placeholder="search"
              />
              <AiOutlineSearch
                style={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
              />
            </Col>
          </Row>
          {/* here posts */}
          {posts.map((post, index) => {
            return <Post key={index} data={post} />;
          })}
          {/* end posts */}
          <WriteArticles isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #eff2f6;
  min-height: 100vh;
  position: relative;
  top: 50px;
  padding: 20px;
  .search-box {
    :focus {
      border-color: #198754;
      box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
    }
  }
  .header {
    img {
      width: 40px;
      height: 40px;
      padding: 1px;
      border-radius: 50%;
    }
  }
`;
