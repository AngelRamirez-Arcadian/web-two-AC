import React, {useRef, useEffect} from 'react';
import styled from 'styled-components'


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
    )
}
 
export default MenuMobile;