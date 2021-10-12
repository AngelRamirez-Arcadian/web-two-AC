import React from 'react';
import BackgroundAnimate from './backgroundAnimate';
import RotatingText from './rotatingText';

const App = () => {
  return (
    <main id="home" className="class w-full flex inset-0 font-sans text-white-900">
    <BackgroundAnimate/>
    <div
      className="w-full inset-0 h-screen text-white flex 
                  items-center font-extrabold 
                  text-xl"
    >
      <div className="w-full flex-1">
        <h1 className="font-extrabold text-7xl desktop:text-9xl text-center">
            ANGEL
        </h1>
        <h1 className="text-themeBlue font-extrabold text-7xl desktop:text-9xl text-center">
            RAMIREZ
        </h1>
        <RotatingText/>
      </div>
    </div>
    {/* mailto:hi@danrocha.xyz?subject=Email%20Subject&body=Body%20Text */}
  </main>
  );
}

export default App;
