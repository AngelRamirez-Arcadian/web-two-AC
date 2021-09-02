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
    useEffect(() => {
        const menu = document.getElementById('nav-icon3');
        const navActive = document.querySelector('.navActive');
        menu.addEventListener("click", () => {
            menu.classList.toggle('open')
        })

        
    }, [menuRef])

    return(
    <div className="fixed transform -translate-y-1/2 right-12 sm:top-0 block desktop:hidden">
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
    )
}
 
export default MenuMobile;