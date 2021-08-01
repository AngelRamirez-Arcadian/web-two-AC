import React from 'react';
import Logo from './images/logo.png'
import Acerca from './images/imgcoding.svg'


const AcercaDeMi = () =>(
        <div className="w-full min-h-full text-white flex
                        text-xl text-white-900 bg-themeDarkBlue
                        font-sans font-light pb-28">
            <div className="desktop:mx-32 mx-7 flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex-1">
                    <div className="text-justify sm:text-left mb-10">
                        <p className="text-themeBlue font-bold text-2xl mb-1">ACERCA DE MI</p>
                        <p className="mb-2">
                            Desarrollador de Software, CEO en&nbsp;
                            <a href="https://www.facebook.com/ArcadianCorp" className="text-themeBlue inline-block">
                                Arcadian Corp.
                            </a>
                        </p>
                        <p>
                            Soy un desarrollador creativo de nacionalidad Mexicana, 
                            arriesgándose a cualquier reto, aprendiendo e iniciando 
                            una empresa llamada&nbsp;
                            <a href="https://www.facebook.com/ArcadianCorp" className="text-themeBlue">
                                Arcadian Corp.
                            </a> 
                            &nbsp;<font className="text-xs">"Navegando hacia el futuro"</font>
                        </p>
                    </div>
                    <div className="text-justify sm:text-left">
                        <p className="text-themeBlue font-bold text-2xl mb-3">
                            ¿A QUE ME DEDICO?
                        </p>
                        <p className="mb-5">
                            Ofrezco mis servicios y conocimiento en ingenieria de software 
                            a pequeñas, medianas y grandes empresas. Solucion en desarrollo
                            de software, optimizacion de procesos y desarrollo a la medida.
                        </p>
                        <ul>
                            <li><font className="text-themeBlue">• </font>Desarrollo  Web</li>
                            <li><font className="text-themeBlue">• </font>Desarro Movil</li>
                            <li><font className="text-themeBlue">• </font>Aplicaciones de Escritorio</li>
                            <li><font className="text-themeBlue">• </font>Administracion de Bases de Datos</li>
                            <li><font className="text-themeBlue">• </font>Intermediario Online</li>
                            <li><font className="text-themeBlue">• </font>Analisis de Datos</li>
                            <li><font className="text-themeBlue">• </font>Analisis de Negocio</li>
                            <li><font className="text-themeBlue">• </font>Analisis de Requerimientos</li>

                        </ul>
                    </div>
                </div>
                <div className="flex-1 md:w-1/2 w-full flex justify-center items-center mt-2 sm:mt-0">
                    <div className="flex justify-center desktop:justify-end mt-10 desktop:mt-0">
                        <img src={Acerca} className="desktop:w-10/12 w-3/4" />
                    </div>
                </div>
            </div>

        </div>
) 
export default AcercaDeMi;