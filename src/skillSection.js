import React from 'react';
import Title from './titles';
import CircleBar from './circleBar';
import BarComponent from './barcomponent';

const SkillSection = () =>
<section id="skills" className="w-full pb-40 mx-auto px-10">
    <Title
        classNames={'flex justify-center mb-20'}
    >
        Habilidades
    </Title>
    <div className="desktop:flex desktop:flex-row flex-col">
        <div className="desktop:w-1/3 w-full desktop:mt-8">
            <div className=" grid grid-cols-2">
                <CircleBar 
                    classNames={'progress--90'}
                    percent={'90%'}
                    task={'Innovador'}
                />
                <CircleBar 
                    classNames={'progress--80'}
                    percent={'80%'}
                    task={'Comunicacion'}
                />
                <CircleBar 
                    classNames={'progress--100'}
                    percent={'100%'}
                    task={'Compromiso'}
                />
                <CircleBar 
                    classNames={'progress--75'}
                    percent={'75%'}
                    task={'Trabajo en equipo'}
                />
            </div>
        </div>
        <div className="desktop::w-2/3 w-full sm:mb-0 mt-20 sm:mt-0 desktop:flex desktop:flex-row flex-col ">
            <div className="w-full container mx-auto desktop:px-20 px-8">
                <h1 className="text-white text-2xl font-medium font-sans">FRONT END</h1>
                <BarComponent
                    title={'ReactJS'}
                    percent={'75%'}
                    stylePercent={'75%'}
                />
                <BarComponent
                    title={'GatsbyJS'}
                    percent={'70%'}
                    stylePercent={'70%'}
                />
                <BarComponent
                    title={'CSS / Tailwind'}
                    percent={'80%'}
                    stylePercent={'80%'}
                />
                <h1 className="text-white text-2xl font-medium font-sans mt-10 sm:mt-0">BACK END</h1>
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
            <div className="w-full container mx-auto desktop:px-20 px-8">
                <h1 className="text-white text-2xl font-medium font-sans mt-10 sm:mt-0">MÁS</h1>
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
                <h1 className="text-themeBlue">Habilidades No Tecnicas</h1>
                <div className="">
                    <ul className="text-white font-light text-md">
                        <li><font className="text-themeBlue">&#8226; </font>Analisis de Requerimientos</li>
                        <li><font className="text-themeBlue">&#8226; </font>Analisis de Negocio</li>
                        <li><font className="text-themeBlue">&#8226; </font>Analisis de Mercado</li>
                        <li><font className="text-themeBlue">&#8226; </font>Administracion de Empresas</li>
                        <li><font className="text-themeBlue">&#8226; </font>Administracion de Proyectos</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full flex sm:flex-row flex-col mx-auto sm:mt-32 mt-20  desktop:px-20">
    
    </div>
    
</section>
export default SkillSection;