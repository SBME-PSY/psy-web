import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../App.css';
function Room(props) {
  const { roomId } = useParams();
  const { socket, peer, stream } = useSelector((store) => store);
  const addMediaStream = () => {
    const localVideo = document.createElement('video');
    localVideo.srcObject = stream;
    localVideo.muted = true;
    localVideo.addEventListener('loadedmetadata', () => {
      localVideo.play();
    });
    document.getElementById('video-grid').appendChild(localVideo);
  };
  useEffect(() => {
    addMediaStream();
    console.log(socket.id, peer.id, stream);
    socket.emit('join-room', roomId, peer.id);
  }, []);
  return (
    <>
      <div id="video-grid"></div>;
    </>
  );
}

export default Room;
