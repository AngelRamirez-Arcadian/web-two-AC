import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './menu';
import Icons from './icons'
import App from './App';
import AcercaDeMi from './acercade';
import AcercaTwo from './acercadetwo';
import Experience from './experience';
import SkillSection from './skillSection';
import BackgroundAnimate from './backgroundAnimate';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <Icons/>
    <App />
    <AcercaDeMi/>
    <AcercaTwo/>
    <Experience/>
    <SkillSection/>
    <BackgroundAnimate/>
  </React.StrictMode>,
  document.getElementById('root')
  
);

reportWebVitals();
