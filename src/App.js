import React from 'react';
import ParagraphHover from './paragraphHover';
import Logo from './images/logo.png'

function App() {
  return (
    <main id="home" className="w-full flex inset-0 font-sans text-white-900">
    <div
      className="w-full inset-0 h-screen text-white flex 
                  items-center font-extrabold 
                  text-xl"
    >
      <ParagraphHover/>
      <div className="w-1/2 hidden desktop:block">
        <img className="h-56 w-56 container mx-auto" src={Logo} />
      </div>
    </div>
    {/* mailto:hi@danrocha.xyz?subject=Email%20Subject&body=Body%20Text */}
  </main>
  );
}

export default App;
