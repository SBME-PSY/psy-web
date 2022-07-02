import React from 'react';
import styled from 'styled-components';
import offline from '../assets/Img/offline.gif';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function NotFound(props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <main>
        <section>
          <img src={offline} alt="" />
          <h2>This page is unknown or dose not exist </h2>
          <h6>Sorry about that, but the page you looking for is not exist </h6>
          <button
            onClick={() => {
              navigate('/', { replace: true });
            }}
          >
            Back Home
          </button>
        </section>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(240 253 244);
    section {
      h2,
      h6 {
        text-align: center;
        color: rgb(168 162 158);
      }
      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 2px solid var(--green500);
        object-fit: cover;
        margin: auto;
        display: block;
      }
      button {
        margin: auto;
        display: block;
        color: white;
        background: var(--green500);
        border: none;
        padding: 10px;
        margin-top: 30px;
        :hover {
          background-color: var(--green600);
        }
      }
    }
  }
`;
export default NotFound;
