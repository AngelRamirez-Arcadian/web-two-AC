import React from 'react';
import SocialIcon from './socialicons'

const Icons = () => (
    <div
    className="fixed transform flex flex-1 
                bottom-20 left-1/2 -translate-x-2/4 
                sm:bottom-16"
    >
        <div className="sm:w-full w-60 flex flex-row justify-center">
            <SocialIcon 
                iconName="github" 
                url="https://github.com/AngelRamirez-Arcadian" 
            />
            <SocialIcon
                iconName="facebook"
                url="https://www.facebook.com/joseangel.ramirezsanchez.92"
            />
            <SocialIcon
                iconName="instagram"
                url="https://www.instagram.com/jars.little/?hl=es"
            />
            <SocialIcon 
                iconName="twitter" 
                url="https://twitter.com/Im_Jars" 
            />
        </div>
    </div>
)
 
export default Icons;
