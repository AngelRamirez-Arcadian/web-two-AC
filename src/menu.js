import React from 'react'
import styled from 'styled-components'

const Line = styled.a`
  height: 2px;
  width: 30px;
  border: 2px solid #3399FF;
  border-radius: 9999px;
  margin: 20px 20px 20px 0px;
  position: relative;
  :before{
      content: '';
      display: inline-block;
      color: #7733FF;
      transform: translateX(-90px) translateY(-7px);
      font-family: "Open Sans";
      font-size: 10px;
      letter-spacing: 3.57px;
      line-height: 14px;
      position: absolute;
      opacity: 0;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover{
      width: 60px;
      transition: all 0.2s ease-in-out 0s;
      border: 2px solid #7733FF;
      &.inicio:before{
          opacity: 1;
          content: '<INICIO/>';
          transform: translateX(-6.5rem) translateY(-7px);
        }
        &.acerca-de-mi:before{
          opacity: 1;
          content: '<ACERCA DE MI/>';
          width: 140px;
          transform: translateX(-10rem) translateY(-7px);
        }
        &.experiencia:before{
          opacity: 1;
          content: '<EXPERIENCIA/>';
          transform: translateX(-10rem) translateY(-7px);

        }
    }
` 

const Menu = () => (
  <nav className="fixed transform -translate-y-1/2 right-5 sm:top-1/2 pl-6 w-24 top-1/2">
    <ul className="flex flex-col">
        <Line className="inicio" href="#menu"/>
        <Line className="acerca-de-mi" href="#acerca-de-mi"/>
        <Line className="experiencia" href="#experiencia"/>
    </ul>
  </nav>
)

export default Menu
