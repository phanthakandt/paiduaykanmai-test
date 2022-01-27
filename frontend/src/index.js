import React from 'react';
import ReactDOM from 'react-dom';
import Web from './rotues/Web';
require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>,
  document.getElementById('root')
);