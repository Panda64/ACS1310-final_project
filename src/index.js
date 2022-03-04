import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Name from './components/Name';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Name />} />
      <Route path="/map" element={<App />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
