import React from 'react';

const CircleBar = ({percent, task, classNames}) => (
    <div
        className="flex-1 flex justify-center
                    flex-col items-center mb-5 sm:mb-10"
    >
        <div className={`${classNames}` + ' progress--circle'}>
            <div className="progress__number font-IBM">
                {percent}
            </div>
        </div>
        <h1 className="text-white font-light tracking-wider text-center">
            {task}
        </h1>
    </div>
)
 
export default CircleBar;