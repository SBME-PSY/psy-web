import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

function ErrorPage() {
  const dispatch = useDispatch();
  const err = useSelector((state) => state.err);

  const handelClick = () => {
    document.getElementById('main').classList.remove('animation-on');
    document.getElementById('main').classList.add('animation-off');
    setTimeout(() => {
      dispatch({ type: 'UPDATE_ERR', pyload: '' });
    }, 500);
  };
  return (
    <Wrapper>
      <main className="animation-on" id="main">
        <article>{err} !</article>
        <article>
          <button onClick={handelClick}>ok</button>
        </article>
      </main>
    </Wrapper>
  );
}

const animationOn = keyframes`
    0%{ top:-100px}
    100%{top:0px}
`;
const animationOff = keyframes`
    0%{ top:0px}
    100%{top:-200px}
`;
const Wrapper = styled.div`
  main {
    border-radius: 10px;
    z-index: 1031;
    left: 50%;
    top: -200px;
    transform: translateX(-50%);
    background: white;
    padding: 20px;
    color: #707071;
    position: fixed;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .animation-on {
    animation-name: ${animationOn};
  }
  .animation-off {
    animation-name: ${animationOff};
  }
  article {
    button {
      float: right;
      padding: 5px 10px;
      margin-top: 5px;
      background: white;
      border: none;
      color: white;
      background: rgb(5 150 105);
      :hover {
        background-color: rgb(16 185 129);
      }
    }
  }
`;
export default ErrorPage;
