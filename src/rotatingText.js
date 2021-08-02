import React from 'react';

var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => (
<div className="flex justify-center">
    <h1
        className='font-IBM font-extrabold text-xl desktop:text-4xl mt-5 mr-1'>
            &#62;
    </h1>
    <ReactRotatingText 
        className='font-IBM text-xl desktop:text-4xl mt-5'
        items={[` Software developer`,
                ` Professional designer`,
                ` Cryptocurrency investor ₿`,
                ` Competitive gamer`,
                ``,]}
        color='#6196E4' 
    />
</div>
)
 
export default RotatingText;