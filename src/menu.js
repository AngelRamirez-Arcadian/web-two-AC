import React from 'react'
import styled from 'styled-components'

const menu = {
  home: 'INICIO',
  about: 'ACERCA DE MI',
  skills: 'EXPERIENCIA',
}

const Line = styled.div`
  transition: all 400ms cubic-bezier(0.37, 0.33, 0.37, 1.03);
  &:before {
    width: 100vh;
    color: #3399ff;
    font-family: 'Open Sans';
    font-size: 10px;
    letter-spacing: 3.57px;
    line-height: 14px;
    display: flex;
    transform: translateX(-110px) translateY(-7px);
    transition: all 800ms cubic-bezier(.37,.33,.37,1.03), opacity 300ms cubic-bezier(.37,.33,.37,1.03);
    opacity: 0;
  }
  &:before {
      content: '<${menuTitle => menuTitle.content}/>';
  }
`
const LineContainer = styled.a`
  &:hover ${Line} {
    width: 60px;
    border: 2px solid #7733ff;
    &:before {
      opacity: 1;
      color: #7733ff;
      transform: translateX(calc(-.1% - 150px)) translateY(-7px);
      width: max-content;
    }
  }
`

const Menu = () => (
  <nav
    className="fixed transform -translate-y-1/2 
              right-5 sm:top-1/2 w-24 top-1/2"
  >
    <div className="flex flex-col">
      {Object.entries(menu).map(([hash, value]) => (
      <LineContainer className="p-0.5" href={'#' + hash}>
        <Line
          className="h-0.5 w-7.5 border-2 border-themeBlue
                    rounded-full m-5" 
          content={value}/>
      </LineContainer>
      
    ))}
    </div>
  </nav>
)

export default Menu
