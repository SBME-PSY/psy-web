import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
function Room(props) {
  const { id: roomId } = useParams();
  let { stream } = useSelector((store) => store);
  useEffect(() => {
    const localVideo = document.createElement('video');
    console.log(stream);
    localVideo.srcObject = stream;
    localVideo.muted = true;
    localVideo.addEventListener('loadedmetadata', () => {
      localVideo.play();
    });
    document.getElementById('video-grid').appendChild(localVideo);
  }, []);
  return (
    <Wrapper>
      <main>
        <div id="video-grid"></div>;
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgb(110 231 183);
  height: 100vh;
  width: 100vw;
  padding: 20px;

  #video-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  #video-grid video {
    width: 100%;
    object-fit: cover;
    height: 300px;
    li:nth-child(-n + 2) {
      background-color: red;
    }
  }
  #video-grid img {
    width: 100%;
    object-fit: cover;
    :nth-child(n + -1) {
      background-color: red;
    }
  }
`;
export default Room;
