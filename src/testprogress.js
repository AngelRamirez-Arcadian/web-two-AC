import React from 'react';

const Prueba = () =>
<section className="bg-themeDarkBlue pb-40"> 
    <h1 className="text-themeBlue font-semibold sm:font-bold text-3xl flex justify-center mb-10">Habilidades</h1>
    <div className="sm:flex sm:flex-row grid grid-cols-2">
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
</section>
export default Prueba;