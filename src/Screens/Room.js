import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../App.css';
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
    <>
      <div id="video-grid"></div>;
    </>
  );
}

export default Room;
