import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Col, Row, Input, Container, Spinner } from 'reactstrap';
import Post from '../Components&sections/Articles/Post';
import Navigation from '../Components&sections/HomeSections/Navbar';
import WriteArticles from '../Components&sections/Articles/WriteArticles';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Test() {
  const dispatch = useDispatch();
  const err = useSelector((state) => state.err);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [page, setPage] = useState(1);
  const getData = () => {
    axios({
      method: 'GET',
      url: `/psy/articles?searchString=${searchString}&limit=3&page=${page}`,
    })
      .then((res) => {
        if (res.data.data.length === 0) {
          setHasMore(false);
        }
        setPosts((oldPosts) => {
          if (searchString) {
            return res.data.data;
          }
          return [...oldPosts, ...res.data.data];
        });
        setLoading(false);
      })
      .catch((err) => {
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
  const next = () => {
    setPage(page + 1);
    getData();
  };
  const handelChange = (e) => {
    setSearchString(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    setPage(page + 1);
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
        <h1
          style={{
            maxWidth: '600px',
            color: 'rgb(173, 176, 179)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -80%)',
            textAlign: 'center',
          }}
        >
          Sorry! There was a problem while fetching your data try again later
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
                value={searchString}
                onChange={handelChange}
              />
              <AiOutlineSearch
                style={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
                onClick={getData}
              />
            </Col>
          </Row>
          {/* here posts */}
          <InfiniteScroll
            dataLength={posts.length}
            next={next}
            hasMore={hasMore}
            loader={
              <div style={{ textAlign: 'center' }}>
                <Spinner> </Spinner>
              </div>
            }
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {posts.map((post, index) => {
              return <Post key={index} data={post} />;
            })}
          </InfiniteScroll>

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
