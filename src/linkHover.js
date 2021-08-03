import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    position: relative;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		bottom: 0;
		margin: -5px 0;
		background-color: #6196E4;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.4s ease-in-out 0s;
	}
	&:hover:before {
		visibility: visible;
		transform: scaleX(1);
	}   `

const LinkHover = ({url,text}) => (
    <Link
        className="text-themeBlue inline-block"
        href={url}
        target="_blank"
        rel="noreferrer"
    >
        {text}
    </Link>
)
 
export default LinkHover;