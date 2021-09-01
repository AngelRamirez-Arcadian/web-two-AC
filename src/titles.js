import React from 'react';

const Title = ({children, classNames}) => (
    <h1 className={`${classNames} text-themeBlue font-bold text-3xl mb-4`}>
        {children}
    </h1>
)
export default Title;