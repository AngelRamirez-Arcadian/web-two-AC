import React from 'react';

const Prueba = () =>
<section className="bg-themeDarkBlue pb-40"> 
    <h1 className="text-themeBlue font-semibold sm:font-bold text-3xl flex justify-center mb-10">Habilidades</h1>
    <div className="sm:flex sm:flex-row grid grid-cols-2 sm:mb-28 mb-20">
        <div className="flex-1 flex justify-center flex-col items-center mb-5 sm:mb-0">
            <div className="progress--circle progress--90">
                <div className="progress__number font-IBM">90%</div>
            </div>
            <h1 className="text-themeBlue font-bold tracking-wider">Innovador</h1>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center mb-5 sm:mb-0">
            <div className="progress--circle progress--80">
                <div className="progress__number font-IBM">80%</div>
            </div>
            <h1 className="text-themeBlue font-bold tracking-wider">Comunicacion</h1>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center">
            <div className="progress--circle progress--100">
                <div className="progress__number font-IBM">100%</div>
            </div>
            <h1 className="text-themeBlue font-bold tracking-wider">Compromiso</h1>
        </div>
        <div className="flex-1 flex justify-center flex-col items-center">
            <div className="progress--circle progress--70">
                <div className="progress__number font-IBM">70%</div>
            </div>
            <h1 className="text-themeBlue font-bold tracking-wider">Trabajo en equipo</h1>
        </div>
    </div>
    <div className="w-full flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full container mx-auto sm:px-32 px-10">
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block uppercase rounded-full text-themeBlue bg-themeDarkBlue">
                            Task in progress
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-themeBlue">
                            30%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                    <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeBlue"></div>
                </div>
            </div>
        </div>
        <div className="sm:w-1/2 w-full container mx-auto sm:px-32 px-10">
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold inline-block uppercase rounded-full text-themeBlue bg-themeDarkBlue">
                            Task in progress
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-themeBlue">
                            30%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                    <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeBlue"></div>
                </div>
            </div>
        </div>
    </div>
</section>
export default Prueba;