import React from 'react';
import BarComponent from './barcomponent';

const SkillSection = () =>
<section className="bg-themeDarkBlue pb-40">
    <div className="sm:flex sm:flex-row flex-col">
        <div className="sm:w-1/2 w-w-full">
            <h1 className="text-themeBlue font-semibold sm:font-bold text-3xl flex justify-center mb-10">Habilidades</h1>
            <div className=" grid grid-cols-2 sm:mb-28 mb-20">
                <div className="flex-1 flex justify-center flex-col items-center mb-5 sm:mb-0">
                    <div className="progress--circle progress--90">
                        <div className="progress__number font-IBM">90%</div>
                    </div>
                    <h1 className="text-themeBlue font-IBM font-semibold tracking-wider">Innovador</h1>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center mb-5 sm:mb-0">
                    <div className="progress--circle progress--80">
                        <div className="progress__number font-IBM">80%</div>
                    </div>
                    <h1 className="text-themeBlue font-IBM font-semibold tracking-wider">Comunicacion</h1>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <div className="progress--circle progress--100">
                        <div className="progress__number font-IBM">100%</div>
                    </div>
                    <h1 className="text-themeBlue font-IBM font-semibold tracking-wider">Compromiso</h1>
                </div>
                <div className="flex-1 flex justify-center flex-col items-center">
                    <div className="progress--circle progress--70">
                        <div className="progress__number font-IBM">70%</div>
                    </div>
                    <h1 className="text-themeBlue font-IBM font-semibold tracking-wider text-center">Trabajo en equipo</h1>
                </div>
            </div>
        </div>
        <div className="sm:w-1/2 w-full sm:mb-0 mb-10">
            <h1 className="text-themeBlue font-semibold sm:font-bold text-3xl flex justify-center mb-10 text-center">Habilidades No Tecnicas</h1>
            <div className="flex justify-center">
                <ul className="text-white font-IBM font-semibold text-md leading-loose tracking-wide">
                    <li><font className="text-themeBlue">&#8226; </font>Analisis de Requerimientos</li>
                    <li><font className="text-themeBlue">&#8226; </font>Analisis de Negocio</li>
                    <li><font className="text-themeBlue">&#8226; </font>Analisis de Mercado</li>
                    <li><font className="text-themeBlue">&#8226; </font>Administracion de Empresas</li>
                    <li><font className="text-themeBlue">&#8226; </font>Administracion de Proyectos</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="w-full flex sm:flex-row flex-col mx-auto">
        <div className="sm:w-1/3 w-full container mx-auto sm:px-14 px-12">
            <h1 className="text-white text-2xl font-medium font-sans">FRONT END</h1>
            <BarComponent
                title={'ReactJS'}
                percent={'75%'}
                stylePercent={'75%'}
            />
            <BarComponent
                title={'GarsbyJS'}
                percent={'70%'}
                stylePercent={'70%'}
            />
            <BarComponent
                title={'CSS / Tailwind'}
                percent={'80%'}
                stylePercent={'80%'}
            />
        </div>
        <div className="sm:w-1/3 w-full container mx-auto sm:px-14 px-12">
        <h1 className="text-white text-2xl font-medium font-sans">BACK END</h1>
            <BarComponent
                title={'SQL SERVER'}
                percent={'80%'}
                stylePercent={'80%'}
            />
            <BarComponent
                title={'MySQL'}
                percent={'65%'}
                stylePercent={'65%'}
            />
            <BarComponent
                title={'NodeJS'}
                percent={'70%'}
                stylePercent={'70%'}
            />
            <BarComponent
                title={'Python'}
                percent={'25%'}
                stylePercent={'25%'}
            />
        </div>
        <div className="sm:w-1/3 w-full container mx-auto sm:px-14 px-12">
            <h1 className="text-white text-2xl font-medium font-sans">MÁS</h1>
            <BarComponent
                title={'Git / Github'}
                percent={'90%'}
                stylePercent={'90%'}
            />
            <BarComponent
                title={'VB.NET'}
                percent={'80%'}
                stylePercent={'80%'}
            />
            <BarComponent
                title={'Adobe Ilustrator'}
                percent={'75%'}
                stylePercent={'75%'}
            />
            <BarComponent
                title={'Adobe Photoshop'}
                percent={'85%'}
                stylePercent={'85%'}
            />
            <BarComponent
                title={'Adobe After Effects'}
                percent={'70%'}
                stylePercent={'70%'}
            />
            <BarComponent
                title={'Sony Vegas Pro'}
                percent={'90%'}
                stylePercent={'90%'}
            />
        </div>
    </div>
    
</section>
export default SkillSection;