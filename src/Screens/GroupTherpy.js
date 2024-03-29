import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BiCopy } from 'react-icons/bi';
import groupTherapyImage from '../assets/Img/googal_meet.svg';
import Navigation from '../Components&sections/HomeSections/Navbar';
import { Peer } from 'peerjs';
import { io } from 'socket.io-client';
import { Spinner } from 'reactstrap';
function GroupTherpy(props) {
  const localStream = useRef();
  const dispatch = useDispatch();
  const { socket, peer, user } = useSelector((store) => store);
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState([]);
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const handelChange = (e) => {
    setRoomId(e.target.value);
  };
  const getMediaStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    return stream;
  };

  const addvideoStream = (remoteStream, remoteVideo) => {
    remoteVideo.srcObject = remoteStream;
    remoteVideo.addEventListener('loadedmetadata', () => {
      remoteVideo.play();
    });
    const videoGrid = document.getElementById('video-grid');
    videoGrid.appendChild(remoteVideo);
  };
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handelCreateRoom = async () => {
    const roomId = uuidv4();
    socket.emit('create-room', roomId, peer.id);
    const stream = await getMediaStream();
    localStream.current = stream;
    dispatch({ type: 'UPDATE_STREAM', pyload: stream });
    navigate(`${roomId}`);
  };
  const join = async (roomId) => {
    const stream = await getMediaStream();
    localStream.current = stream;
    dispatch({ type: 'UPDATE_STREAM', pyload: stream });
    navigate(`${roomId}`);
    socket.emit('join-room', roomId, peer.id);
  };
  const roomExists = (id) => {
    return rooms.includes(id);
  };
  const handelJoinRoom = async (e) => {
    e.preventDefault();
    if (!roomId) {
      setErr('empty filed please enter valid id');
    } else if (!roomExists(roomId)) {
      setErr('Room isnt exist please try again later');
    } else {
      await join(roomId);
    }
  };

  const handelJoinRoomAuto = (roomId) => {
    if (!roomExists(roomId)) {
      setErr('Room isnt exist please try again later');
    } else {
      join(roomId);
    }
  };

  useEffect(() => {
    let peers = {};
    const peer = new Peer(undefined, {
      secure: true,
      host: process.env.REACT_APP_REMOTE_PEER_DOMAIN,
      port: process.env.REACT_APP_REMOTE_PEER_PORT,
      path: process.env.REACT_APP_REMOTE_PEER_PATH,
    });
    const socket = io(process.env.REACT_APP_REMOTE_SOCKET_DOMAIN);
    socket.on('connect', () => {
      dispatch({ type: 'UPDATE_SOCKET', pyload: socket });
      socket.emit('getRooms', '_', (response) => {
        setRooms(response);
      });
    });
    peer.on('open', function (id) {
      dispatch({ type: 'UPDATE_PEER', pyload: peer });
    });
    peer.on('call', async (call) => {
      const stream = localStream.current;
      const remoteVideo = document.createElement('video');
      call.on('stream', function (remoteStream) {
        addvideoStream(remoteStream, remoteVideo);
      });
      call.answer(stream);
      peers[call.peer] = call;
      call.on('close', () => {
        remoteVideo.remove();
      });
    });
    socket.on('user-disconnect', (peerId) => {
      if (peers[peerId]) {
        peers[peerId].close();
      }
    });

    socket.on('user-connected', async (userId) => {
      const stream = localStream.current;
      let call = peer.call(userId, stream);
      const remoteVideo = document.createElement('video');
      call.on('stream', function (remoteStream) {
        addvideoStream(remoteStream, remoteVideo);
      });
      peers[call.peer] = call;
      call.on('close', () => {
        remoteVideo.remove();
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //connect to socket
  return (
    <Wrapper>
      <Navigation />
      {!peer.id || !socket.id ? (
        <div className=" pt-5 bg-white text-center">
          <Spinner> </Spinner>
          <div>conneting to server...</div>
        </div>
      ) : (
        ''
      )}
      {err ? <h1 className="err">{err}</h1> : ''}
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
          {user.role !== 'doctor' ? (
            ' '
          ) : (
            <button
              onClick={handelCreateRoom}
              className="create-room"
              disabled={!peer.id || !socket.id ? true : false}
            >
              create Room
            </button>
          )}
        </article>
        <article className="join-img">
          <img src={groupTherapyImage} alt="d" />
          <h6>put your room id to join room</h6>
        </article>
      </section>
      <section className="roomsId">
        {rooms.map((roomId, index) => {
          return (
            <article key={index}>
              <span>{roomId}</span>
              <BiCopy onClick={() => copyText(roomId)} />
              <div>
                <button onClick={() => handelJoinRoomAuto(roomId)}>
                  join room
                </button>
              </div>
            </article>
          );
        })}
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
  .roomsId {
    display: grid;
    grid-gap: 5px;
    justify-content: space-between;
    margin: 20px 40px 70px 40px;
    flex-wrap: wrap;
    article {
      background-color: #2c83fc;
      color: white;
      width: 100%;
      padding: 10px;
      margin: 10px;
      flex: 40%;
      border-radius: 5px;
      svg {
        transition: 0.1s;
        float: right;
        font-size: 25px;
        cursor: pointer;
        :hover {
          color: #eee;
        }
      }
      button {
        border: none;
        border-radius: 5px;
        padding: 5px;
        transition: 0.1s;
        margin-top: 10px;
        background: white;
        :hover {
          background-color: #eee;
        }
      }
    }
  }
  @media screen and (min-width: 450px) {
    .roomsId {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 776px) {
    .roomsId {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 992px) {
    .roomsId {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default GroupTherpy;
