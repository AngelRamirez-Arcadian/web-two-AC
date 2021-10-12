import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuMobile from './menuMobile';
import Menu from './menu';
import Icons from './icons'
// import App from './App';
// import AcercaDeMi from './acercade';
// import AcercaTwo from './acercadetwo';
// import Experience from './experience';
// import SkillSection from './skillSection';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <MenuMobile/>
    <Icons/>
    {/* <App />
    <AcercaDeMi/>
    <AcercaTwo/>
    <Experience/>
    <SkillSection/> */}
  </React.StrictMode>,
  document.getElementById('root')
  
);

reportWebVitals();
