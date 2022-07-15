import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FiVideo, FiVideoOff } from 'react-icons/fi';
import { AiOutlineAudio } from 'react-icons/ai';
import { BsChatDots, BsMicMute } from 'react-icons/bs';
import { TbPhoneX } from 'react-icons/tb';
import Chat from '../Components&sections/Chats/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
function Video(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [micState, setMicState] = useState(true);
  const [videoState, setVideoState] = useState(true);
  const [loading, setLoading] = useState(true);
  let { stream, peer, socket } = useSelector((store) => store);
  const streamRef = useRef(stream);

  useEffect(() => {
    const localVideo = document.createElement('video');
    localVideo.srcObject = stream;
    localVideo.muted = true;
    localVideo.addEventListener('loadedmetadata', () => {
      localVideo.play();
    });
    document.getElementById('video-grid').appendChild(localVideo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handelMic = () => {
    const micState = stream.getAudioTracks()[0].enabled;
    stream.getAudioTracks()[0].enabled = !micState;
    setMicState(!micState);
  };
  const handelVideo = () => {
    const videoState = stream.getVideoTracks()[0].enabled;
    stream.getVideoTracks()[0].enabled = !videoState;
    setVideoState(!videoState);
  };
  const endGroupTherapy = (peerId) => {
    socket.disconnect();
    navigate('/');
  };
  return (
    <Wrapper>
      <Chat />
      <main>
        <section>
          <h1>psy awareness</h1>
          {loading ? <Spinner> </Spinner> : ' '}
        </section>
        <section id="video-grid"></section>
        <section className="footer">
          <article onClick={handelVideo}>
            {videoState ? <FiVideo /> : <FiVideoOff />}
            <p>cam</p>
          </article>
          <article onClick={handelMic}>
            {micState ? <AiOutlineAudio /> : <BsMicMute />}
            <p>mic</p>
          </article>
          <article onClick={() => endGroupTherapy(peer.id)}>
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
