import React from 'react';

const BarComponent = ({title,percent,stylePercent}) => (
    <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
            <div>
                <span className="text-xs font-light inline-block text-themeBlue">
                    {title}
                </span>
            </div>
            <div className="text-right">
                <span className="text-xs font-IBM font-semibold inline-block text-white">
                    {percent}
                </span>
            </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
            <div style={{width: `${stylePercent}`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeBlue"></div>
        </div>
    </div>
)
export default BarComponent;