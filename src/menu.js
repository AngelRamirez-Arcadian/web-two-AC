import React from 'react'
import styled from 'styled-components'

const menu = {
  home: 'INICIO',
  about: 'ACERCA DE MI',
  skills: 'HABILIDADES',
  experience: 'EXPERIENCIA'
}

const Line = styled.div`
  transition: all 400ms cubic-bezier(0.37, 0.33, 0.37, 1.03);
  &:before {
    width: 100vh;
    color: #020215;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 13px;
    letter-spacing: 4px;
    line-height: 14px;
    display: flex;
    transform: translateX(-110px) translateY(20px);
    transition: all 800ms cubic-bezier(.37,.33,.37,1.03), opacity 300ms cubic-bezier(.37,.33,.37,1.03);
    opacity: 0;
  }
  &:before {
      content: '${menuTitle => menuTitle.content}';
  }
  &.line-active{
    height: 60px;
    border: 2px solid #6196E4;
  }
`
const LineContainer = styled.a`
  &:hover ${Line} {
    height: 60px;
    border: 2px solid #6196E4;
    &:before {
      opacity: 1;
      color: #6196E4;
      transform: translateX(calc(-.1% - 140px)) translateY(20px);
      width: max-content;
    }
  }
`

const Menu = () => (
  <nav
    className="fixed transform -translate-y-1/2 
              right-5 sm:top-1/2 h-full hidden sm:block"
  >
    <div className="h-full flex flex-col justify-between container mx-auto py-16">
      {Object.entries(menu).map(([hash, value]) => (
      <LineContainer className="p-0.5" href={'#' + hash}>
        <Line
          id={value}
          className="h-5 w-5 border-2 border-themeBlue
                    rounded-full m-5" 
          content={value}
        />
      </LineContainer>
      
    ))}
    </div>
  </nav>
)

export default Menu
