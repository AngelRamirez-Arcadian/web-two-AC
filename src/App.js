import React from 'react';
import Icons from './icons'
import ParagraphHover from './paragraphHover';
import Logo from './images/logo.png'

function App() {
  return (
    <main className="w-full flex inset-0 font-sans text-gray-900 bg-themeDarkBlue">
    <div
      className="w-full inset-0 
                  h-screen text-white flex 
                  justify-center items-center font-extrabold 
                  text-xl"
    >
      <ParagraphHover/>
      <div className="flex-1">
        <img className="hidden sm:block" src={Logo} />
      </div>
    </div>
    <Icons/>
  </main>
  );
}

export default App;
