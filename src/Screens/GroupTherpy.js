import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navigation from '../Components&sections/HomeSections/Navbar';
function GroupTherpy(props) {
  const dispatch = useDispatch();
  const { socket, peer } = useSelector((store) => store);
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const handelChange = (e) => {
    setRoomId(e.target.value);
  };
  const handelCreateRoom = () => {
    const roomId = uuidv4();
    socket.emit('create-room', roomId, peer.id);
    navigate(`${roomId}`);
  };
  const handelJoinRoom = (e) => {
    e.preventDefault();
    socket.emit('join-room', roomId, peer.id);
    navigate(`${roomId}`);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        dispatch({ type: 'UPDATE_STREAM', pyload: stream });
      });
  }, []);
  //connect to socket
  return (
    <Wrapper>
      <Navigation />
      <section className="header-video">
        <article className="video-container">
          <h1>psy awareness</h1>
          <h4>video chating for eavery one</h4>
          <form onSubmit={handelJoinRoom} className="form">
            <button> join room </button>
            <input type="text" value={roomId} onChange={handelChange}></input>
          </form>
          <button onClick={handelCreateRoom} className="create-room">
            create Room
          </button>
        </article>
        <article className="join-img">
          <img
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
            alt="d"
          />
        </article>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  top: 70px;
  .header-video {
    text-align: center;
    h1,
    h4 {
      text-align: center;
      color: #a8a29e;
    }
    form {
      text-align: center;
      margin-top: 20px;
      input {
        outline: none;

        padding: 8px;
        :focus-visible {
          border-color: 1px -solid #198754;
          box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
        }
      }
      button {
        color: white;
        background: var(--green500);
        border: none;
        padding: 10px;
        :hover {
          background-color: var(--green600);
        }
      }
    }
    .create-room {
      margin-top: 20px;
      color: white;
      background: var(--green500);
      border: none;
      padding: 10px;
      margin-top: 30px;
      :hover {
        background-color: var(--green600);
      }
    }
    .join-img {
      img {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    @media screen and (min-width: 992px) {
      display: flex;
      justify-content: space-evenly;
      margin-top: 100px;
      align-items: center;
      .video-container {
        order: 2;
      }
    }
  }
`;
export default GroupTherpy;
