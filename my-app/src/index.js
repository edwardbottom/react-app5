//react libraries and imports
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';

//imports the screens for the routes from the files in the screens folder
import App from './App.js'

//renders the routes to transfer data between screens
ReactDOM.render(
  <App data="Somi is a ledgend"/>,
  document.getElementById('wss')
);



