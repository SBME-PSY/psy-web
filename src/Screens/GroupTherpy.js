import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

function GroupTherpy(props) {
  const dispatch = useDispatch();
  const { socket, peer, stream } = useSelector((store) => store);
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
    navigate(`${roomId}`);
  };

  const getLocalVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      dispatch({ type: 'UPDATE_STREAM', pyload: stream });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLocalVideoStream();
    console.log(socket.id, peer.id, stream);
  }, []);
  //connect to socket
  return (
    <div>
      <form onSubmit={handelJoinRoom}>
        <input type="text" value={roomId} onChange={handelChange}></input>
        <button> join room </button>
      </form>
      <button onClick={handelCreateRoom}>create Room</button>
    </div>
  );
}

export default GroupTherpy;
