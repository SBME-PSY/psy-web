import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiVideo, FiVideoOff } from 'react-icons/fi';
import { AiOutlineAudio, AiOutlineAudioMuted } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { TbPhoneX } from 'react-icons/tb';
import Chat from '../Components&sections/Chat';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Video(props) {
  const { id: roomId } = useParams();
  let { stream } = useSelector((store) => store);
  useEffect(() => {
    const localVideo = document.createElement('video');
    localVideo.srcObject = stream;
    localVideo.muted = true;
    localVideo.addEventListener('loadedmetadata', () => {
      localVideo.play();
    });
    document.getElementById('video-grid').appendChild(localVideo);
  }, []);
  return (
    <Wrapper>
      <Chat />
      <main>
        <section>
          <h1>psy awareness</h1>
        </section>
        <section id="video-grid"></section>
        <section className="footer">
          <article>
            <FiVideo />
            <p>cam</p>
          </article>
          <article>
            <AiOutlineAudio />
            <p>mic</p>
          </article>
          <article>
            <TbPhoneX />
            <p>end</p>
          </article>
          <article>
            <BsChatDots />
            <p>chat</p>
          </article>
        </section>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: #016654;
  min-height: 100vh;
  color: white;
  main {
    justify-content: center;
    align-content: center;
    display: grid;
  }
  section {
    text-align: center;
  }
  #video-grid {
    position: relative;
    padding: 30px 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid white;
      border-radius: 5px;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 2px solid white;
      border-radius: 5px;
    }
  }
  .footer {
    bottom: 5px;
    padding: 20px;
    position: sticky;
    margin: auto;
    text-align: center;
    display: flex;
    p {
      text-align: center;
    }
    article {
      margin-left: 10px;
      :first-child {
        margin-left: 0px;
      }
      p {
        margin-bottom: 0px;
      }
    }
    svg {
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(19 78 74);
      cursor: pointer;
      font-size: 50px;
    }
  }
`;
export default Video;
