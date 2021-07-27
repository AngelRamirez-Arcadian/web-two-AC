import React from 'react';
import Logo from './images/logo.png'

const AcercaDeMi = () =>(
        <div className="w-full inset-0 h-screen text-white flex
                        text-xl text-white-900 bg-themeDarkBlue
                        font-light">
            <div className="sm:mx-44 mx-7">
                <div className="sm:w-1/2 w-full">
                    <div className="text-justify sm:text-left mb-10">
                        <p className="text-themeBlue font-bold text-2xl mb-1">ACERCA DE MI</p>
                        <p className="mb-2">
                            Desarrollador de Software, CEO en&nbsp;
                            <a href="https://www.facebook.com/ArcadianCorp" className="text-themeBlue">
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
                            &nbsp;"Navegando hacia el 
                            futuro"
                        </p>
                    </div>
                    <div>
                        <p className="text-themeBlue font-bold text-2xl mb-3">
                            ¿A QUE ME DEDICO?
                        </p>
                    </div>
                    

                </div>
                <div className="sm:w-1/2 w-full">
                    <img className="" src={Logo} />
                </div>
            </div>

        </div>
) 
export default AcercaDeMi;