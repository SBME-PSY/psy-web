import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';
import axios from 'axios';
import { AppProvider } from './context';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
axios.defaults.baseURL = process.env.REACT_APP_REMOTE_SERVER_DOMAIN;

ReactDOM.render(
  <AppProvider>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </AppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
