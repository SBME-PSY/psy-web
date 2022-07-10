import React, { useState, useEffect, useRef } from 'react';
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
  const stream = useSelector((state) => state.stream);
  const streamRef = useRef(stream);
  useEffect(() => {
    if (peer.id && socket.id) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          dispatch({ type: 'UPDATE_STREAM', pyload: stream });
          streamRef.current = stream;
        });
    }
    return () => {
      if (peer.id && socket.id) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);
  //connect to socket
  return (
    <Wrapper>
      <Navigation />
      {!peer.id || !socket.id ? (
        <h1 className="err">
          sorry! internal server error please try again later
        </h1>
      ) : (
        ''
      )}
      <section className="header-video">
        <article className="video-container">
          <h2>psy awareness Group therapy</h2>
          <h5>video chating for eavery one</h5>
          <form onSubmit={handelJoinRoom} className="form">
            <button disabled={!peer.id || !socket.id ? true : false}>
              join room
            </button>
            <input
              placeholder="put your room id"
              type="text"
              value={roomId}
              onChange={handelChange}
            ></input>
          </form>
          <button
            onClick={handelCreateRoom}
            className="create-room"
            disabled={!peer.id || !socket.id ? true : false}
          >
            create Room
          </button>
        </article>
        <article className="join-img">
          <img
            src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
            alt="d"
          />
          <h6>put your room id to join room</h6>
        </article>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  top: 70px;
  @media screen and (min-width: 992px) {
    top: 40px;
  }
  .err {
    text-align: center;
    color: #a8a29e;
    margin-top: 30px;
  }
  .header-video {
    text-align: center;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
      color: #a8a29e;
    }
    form {
      text-align: center;
      margin-top: 20px;
      input {
        :placeholder {
          color: #a8a29e;
        }
        color: #a8a29e;
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
        :disabled {
          background: var(--green500);
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
      :disabled {
        background: var(--green500);
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
      margin-top: 70px;
      align-items: center;
      .video-container {
        order: 2;
      }
    }
  }
`;
export default GroupTherpy;
