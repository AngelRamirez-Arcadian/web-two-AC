import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icons from './icons'
import App from './App';
import AcercaDeMi from './acercade';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Icons/>
    <App />
    <AcercaDeMi/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
