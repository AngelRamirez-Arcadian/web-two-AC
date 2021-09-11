import React, {useRef, useEffect} from 'react';
import SocialIcon from './socialicons';
import styled from 'styled-components'

const Hamburguer = styled.div`
  #nav-icon3 {
    width: 35px;
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
  height: 3.5px;
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
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const experienceRef = useRef(null)
    const skillsRef = useRef(null)

    useEffect(() => {
        menuRef.current.addEventListener("click", () => {
          menuRef.current.classList.toggle('open')
          menuMobileRef.current.classList.toggle('-translate-x-full')
        })
        homeRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        aboutRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        experienceRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
        skillsRef.current.addEventListener("click", () => {
          menuMobileRef.current.classList.toggle('-translate-x-full')
          menuRef.current.classList.toggle('open')
        })
    }, [homeRef,aboutRef,experienceRef,skillsRef,menuRef,menuMobileRef])

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
                      py-28 fixed inset-y-0 left-0 transform
                      -translate-x-full block desktop:hidden z-50
                      transition duration-1000 ease-in-out border-themeBlue border-r-4"
        >
          <a
              href="#" 
              className="text-white flex space-x-2 px-4 justify-center"
            >
              <span className="text-2xl font-extrabold text-themeBlue">
                  Angel Ramirez
              </span>
            </a>

            <nav>
                <a
                  ref={homeRef}
                  href="#home" 
                  className="py-4 flex justify-center transition
                            duration-500 hover:bg-themeBlue
                            border-t border-b border-opacity-10 border-themeBlue"
                >
                    Inicio
                </a>
                <a
                  ref={aboutRef}
                  href="#about" 
                  className="py-4 flex justify-center transition
                            duration-500 hover:bg-themeBlue
                            border-t border-b border-opacity-10 border-themeBlue"
                >
                    Acerca de Mi
                </a>
                <a
                  ref={experienceRef}
                  href="#experience" 
                  className="py-4 flex justify-center transition
                            duration-500 hover:bg-themeBlue
                            border-t border-b border-opacity-10 border-themeBlue"
                >
                    Experiencia
                </a>
                <a
                  ref={skillsRef}
                  href="#skills" 
                  className="py-4 flex justify-center transition
                            duration-500 hover:bg-themeBlue hover:text-themeDarkBlue
                            border-t border-b border-opacity-10 border-themeBlue"
                >
                    Habilidades
                </a>
            </nav>
            <div>
              <SocialIcon
                  iconName="facebook"
                  url="https://www.facebook.com/joseangel.ramirezsanchez.92"
              />
            </div>
        </div>
    </div>
    )
}
 
export default MenuMobile;