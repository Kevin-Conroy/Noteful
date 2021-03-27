import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch, Link  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotefulError from './ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NotefulError >
    <App />
    </NotefulError>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
