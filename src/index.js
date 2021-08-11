import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './menu';
import Icons from './icons'
import App from './App';
import AcercaDeMi from './acercade';
import AcercaTwo from './acercadetwo';
import SkillSection from './skillSection';
import Experiencia from './experiencia';
import BackgroundAnimate from './backgroundAnimate';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <Icons/>
    <App />
    <AcercaDeMi/>
    <AcercaTwo/>
    <SkillSection/>
    <Experiencia/>
    <BackgroundAnimate/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
