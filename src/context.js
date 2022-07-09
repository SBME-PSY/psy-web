import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { Peer } from 'peerjs';
import { io } from 'socket.io-client';
import axios from 'axios';
import { getCookie } from './assets/cookie';
export function AppProvider({ children }) {
  const initialStore = {
    socket: {},
    peer: {},
    stream: {},
    peers: {},
    alert: {
      isNew: false,
      message: '',
    },
    user: '',
    logedin: false,
    err: '',
    messages: [],
  };

  const store = createStore(reducer, initialStore);
  const addvideoStream = (remoteStream, remoteVideo) => {
    remoteVideo.muted = true;
    remoteVideo.srcObject = remoteStream;
    remoteVideo.addEventListener('loadeddata', () => {
      remoteVideo.play();
    });
    const videoGrid = document.getElementById('video-grid');
    videoGrid.appendChild(remoteVideo);
  };
  useEffect(() => {
    // const socket = io('ws://localhost:3001');
    // const peer = new Peer(undefined, {
    //   host: '/',
    //   port: '9000',
    //   path: '/myapp',
    // });
    // peer.on('open', function (id) {
    //   store.dispatch({ type: 'UPDATE_PEER', pyload: peer });
    // });
    // peer.on('call', (call) => {
    //   const { stream } = store.getState();
    //   const remoteVideo = document.createElement('video');

    //   call.on('stream', function (remoteStream) {
    //     addvideoStream(remoteStream, remoteVideo);
    //   });
    //   call.answer(stream);
    //   store.dispatch({
    //     type: 'UPDATE_PEERS',
    //     pyload: { peerId: call.peer, call },
    //   });
    //   call.on('close', () => {
    //     remoteVideo.remove();
    //   });
    // });
    // peer.on('connection', function (conn) {
    //   conn.on('data', function (data) {
    //     console.log('irecievd ' + data);
    //     conn.send('you send me' + data);
    //   });
    // });
    // socket.on('connect', () => {
    //   store.dispatch({ type: 'UPDATE_SOCKET', pyload: socket });
    // });
    // socket.on('user-disconnect', (peerId) => {
    //   const { peers } = store.getState();
    //   if (peers[peerId]) {
    //     peers[peerId].close();
    //   }
    // });

    // socket.on('user-connected', (userId) => {
    //   const { stream } = store.getState();
    //   let call = peer.call(userId, stream);
    //   const remoteVideo = document.createElement('video');
    //   call.on('stream', function (remoteStream) {
    //     addvideoStream(remoteStream, remoteVideo);
    //   });
    //   store.dispatch({
    //     type: 'UPDATE_PEERS',
    //     pyload: { peerId: call.peer, call },
    //   });
    //   call.on('close', () => {
    //     remoteVideo.remove();
    //   });
    //   const conn = peer.connect(userId);
    //   conn.on('open', () => {
    //     conn.send('hi!');
    //   });
    //   conn.on('data', function (data) {
    //   });
    // });
    // // socket.on('no-room', (roomId) => {
    //   console.log('no room id = ' + roomId);
    //   store.dispatch({
    //     type: 'UPDATE_ALERT',
    //     pyload: { isNew: true, message: `not valid Id ${roomId}` },
    //   });
    // });
    return () => {
      // socket.close();
    };
  }, [store]);

  useEffect(() => {
    const jwt = getCookie('jwt');
    const user = getCookie('user');
    if (jwt && user) {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + getCookie('jwt');
      store.dispatch({
        type: 'UPDATE_USER',
        pyload: JSON.parse(getCookie('user')),
      });
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
