import React from 'react';
import styled from 'styled-components'

import Facebook from './images/facebook.svg'
import FacebookHover from './images/facebookHover.svg'
import FacebookActive from './images/facebookActive.svg'
import Twitter from './images/twitter.svg'
import TwitterHover from './images/twitterHover.svg'
import TwitterActive from './images/twitterActive.svg'
import Instagram from './images/instagram.svg'
import InstagramHover from './images/instagramHover.svg'
import InstagramActive from './images/instagramActive.svg'
import Github from './images/github.svg'
import GithubHover from './images/githubHover.svg'
import GithubActive from './images/githubActive.svg'


const images = {
    github: {
      default: Github,
      hover: GithubHover,
      active: GithubActive,
    },
    twitter: {
      default: Twitter,
      hover: TwitterHover,
      active: TwitterActive,
    },
    facebook: {
      default: Facebook,
      hover: FacebookHover,
      active: FacebookActive,
    },
    instagram: {
      default: Instagram,
      hover: InstagramHover,
      active: InstagramActive,
    },
  }
  
  const SocialImage = styled.img`
    transition: opacity 300ms;
  `
  const AbsImage = styled(SocialImage)`
    position: absolute;
    top: 0;
    left: 0;
  `
  
  const ActiveImage = styled(AbsImage)``
  const HoverImage = styled(AbsImage)``
  const DefaultImage = styled(SocialImage)``
  
  const IconContainer = styled.div`
    position: relative;
    width: 42px;
    height: 42px;
    ${HoverImage},
    ${ActiveImage} {
      opacity: 0.2;
    }
    ${DefaultImage} {
      opacity: 1;
    }
    &:hover {
      ${ActiveImage},
      ${DefaultImage} {
        opacity: 0;
      }
      ${HoverImage} {
        opacity: 100%;
      }
    }
    &::active,
    &:focus {
      ${HoverImage},
      ${DefaultImage} {
        opacity: 0;
      }
      ${ActiveImage} {
        opacity: 1;
      }
    }
  `
  
  const SocialIcon = ({ iconName, url }) => (
    <IconContainer className="mx-3 relative flex justify-items-end">
      <a href={url} target="_blank" rel="noreferrer">
        <DefaultImage src={images[iconName].default} />
        <HoverImage src={images[iconName].hover} />
        <ActiveImage src={images[iconName].active} />
      </a>
    </IconContainer>
  )
  
  
  export default SocialIcon
  