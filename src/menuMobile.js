import React, {useRef, useEffect} from 'react';
import styled from 'styled-components'

const Hamburguer = styled.div`
  #nav-icon3 {
    width: 38px;
    height: 30px;
    margin: 25px auto;
    position: fixed;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}
#nav-icon3 span {
  display: block;
  position: absolute;
  height: 4.5px;
  width: 100%;
  background: #6196E4;
  border-radius: 9999px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 20px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
`

const MenuMobile = () => {

    const menuRef = useRef(null)
    const menuMobileRef = useRef(null)

    useEffect(() => {
        menuRef.current.addEventListener("click", () => {
          menuRef.current.classList.toggle('open')
          menuMobileRef.current.classList.toggle('-translate-x-full')
        })

        
    }, [menuRef,menuMobileRef])

    return(
    <div>
      <div className="fixed transform -translate-y-1/2 right-12 sm:top-0 block desktop:hidden z-50">
          <Hamburguer>
              <div 
              ref={menuRef}
              id="nav-icon3"
              className="navActive"
              >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </Hamburguer>
      </div>
      <div
          ref={menuMobileRef}
          className="bg-themeDarkBlue text-blue-100 w-64 space-y-6 
                      py-7 px-2 fixed inset-y-0 left-0 transform 
                      -translate-x-full block desktop:hidden z-50
                      transition duration-200 ease-in-out"
        >
          <a
              href="#" 
              className="text-white flex items-center space-x-2 px-4"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /
                  >
              </svg>
              <span className="text-2xl font-extrabold">
                  Angel Ramirez
              </span>
            </a>

            <nav>
                <a
                  href="#home" 
                  className="block py-2.5 px-4 rounded-lg transition
                            duration-200 hover:bg-blue-700"
                >
                    Inicio
                </a>
                <a
                  href="#about" 
                  className="block py-2.5 px-4 rounded-lg transition
                            duration-200 hover:bg-blue-700"
                >
                    Acerca de Mi
                </a>
                <a
                  href="#experience" 
                  className="block py-2.5 px-4 rounded-lg transition
                            duration-200 hover:bg-blue-700"
                >
                    Experiencia
                </a>
                <a
                  href="#skills" 
                  className="block py-2.5 px-4 rounded-lg transition
                            duration-200 hover:bg-blue-700"
                >
                    Habilidades
                </a>
            </nav>

        </div>
    </div>
    )
}
 
export default MenuMobile;