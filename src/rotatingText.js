import React from 'react';

var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => (
<div className="flex justify-center">
    <ReactRotatingText 
        className='font-inconsolata text-xl desktop:text-4xl mt-5'
        items={[`< SOFTWARE DEVELOPER />`,
                `< DESIGNER />`,
                `< CRYPTOCURRENCY INVESTOR />`,
                `< OLD GAMER />`]}
        color='#6196E4' 
    />
</div>
)
 
export default RotatingText;