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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
