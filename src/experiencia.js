import React from 'react'
import LinkHover from './linkHover';


const Experiencia = () => (
    <div id="experience" className="text-white">
        <h1 className="text-themeBlue font-bold text-2xl flex justify-center mb-10">EXPERIENCIA</h1>
        <ul className="timeline sm:mr-24 sm:ml-24 mr-20">
            <li className="timeline-event">
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-copy">
                    <p className="timeline-event-thumbnail text-themeBlue font-extralight sm:mt-0 mt-1">Diciembre 2020 - Actualidad</p>
                    <LinkHover 
                                classNames={'font-bold text-4xl mb-1'}
                                url={'https://blissddm.xyz/es/'}
                                text={'Bliss DDM'}
                            />
                    <h3 className="text-xl font-bold mb-4">Desarrollo Web</h3>
                    <p className="text-justify font-light">
                        <strong>Portafolio Personal: </strong>
                        Desarrollo de portafolio, pagina web personal utilizando tecnologias de dessarrollo como GatsbyJS, Tailwind CSS, utilizando
                        tecnologias de diseño y afectos agradables para el usuario.
                    </p>
                    <p>
                        <strong>Proyectos en ReactJS:</strong><br/>
                        <ul>
                            <li className="text-justify font-light">
                                <LinkHover 
                                    classNames={'text-themeBlue font-medium'}
                                    url={'https://fervent-borg-fc19d5.netlify.app/'}
                                    text={'Administrador de Pacientes'}
                                />
                                &nbsp;: Aplicacion Web para la administracion de citas en veterinarias utilizando la tecnologia de ReactJS.
                            </li>
                            <li className="text-justify font-light">
                                <LinkHover 
                                    classNames={'text-themeBlue font-medium'}
                                    url={'https://frosty-thompson-be58ba.netlify.app/'}
                                    text={'Prespuesto y gasto semanal'}
                                />
                                &nbsp;: Aplicacion Web para el calculo de presupuesto y la admistracion del gasto semanal, adaptado a cualquier presupuesto
                                 con la tecnologia de ReactJS.
                            </li>
                            <li className="text-justify font-light">
                                <LinkHover 
                                    classNames={'text-themeBlue font-medium'}
                                    url={'https://condescending-wright-d1e099.netlify.app/'}
                                    text={'Cotizador de Seguros'}
                                />
                                &nbsp;: Aplicacion Web para el calculo de presupuesto y la admistracion del gasto semanal, adaptado a cualquier presupuesto
                                 con la tecnologia de ReactJS.
                            </li>
                        </ul>
                    </p>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                    <p class="timeline-event-thumbnail">November 2009 - März 2011</p>
                    <h3>Freelancer</h3>
                    <h4>Designer und Autor</h4>
                    <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                    <p class="timeline-event-thumbnail">April 2011 - heute</p>
                    <h3>konplan gmbh</h3>
                    <h4>IT-Consultant</h4>
                    <p><strong>Systemarchitektur, Consulting</strong><br/>Konzeption und Modellierung von Systemen und APIs für Digital Publishing und Entitlement nach SOA</p>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                    <p class="timeline-event-thumbnail">April 2011 - heute</p>
                    <h3>konplan gmbh</h3>
                    <h4>IT-Consultant</h4>
                    <p><strong>Systemarchitektur, Consulting</strong><br/>Konzeption und Modellierung von Systemen und APIs für Digital Publishing und Entitlement nach SOA</p>
                </div>
            </li>
        </ul>
    </div>
)
export default Experiencia;
