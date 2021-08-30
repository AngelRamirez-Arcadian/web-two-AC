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
const screenHome = document.getElementById('home')
const iconHome = document.getElementById('INICIO')

const screenAbout = document.getElementById('about')
const iconAbout = document.getElementById('ACERCA DE MI')

const screenSkills = document.getElementById('skills')
const iconSkills = document.getElementById('HABILIDADES')

const callbackHome = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      iconHome.classList.add('line-active')
    } else {
      iconHome.classList.remove('line-active')
    }
  })
}
const callbackAbout = (entriesAbout) => {
  entriesAbout.forEach(entryAbout => {
    if(entryAbout.isIntersecting){
      iconAbout.classList.add('line-active')
    } else {
      iconAbout.classList.remove('line-active')
    }
  })
}
const callbackSkills = (entries) => {
  if(!entries[0].isIntersecting){
    iconSkills.classList.remove('line-active')
  } else {
    iconSkills.classList.add('line-active')
  }
}


const observerHome = new IntersectionObserver(callbackHome)
const observerAbout = new IntersectionObserver(callbackAbout)
const observerSkills = new IntersectionObserver(callbackSkills)
observerHome.observe(screenHome)
observerAbout.observe(screenAbout)
observerSkills.observe(screenSkills)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
