import React from 'react'
import LinkHover from './linkHover'
import styled from 'styled-components'

const TimelineContainer = styled.div`
    color: white;
    max-width: 1000px;
    margin: 0 auto;
    border-left: 4px solid #6196E4;
    padding-left: 25px;
    @media (max-width: 1050px){
        max-width: 100%;
        margin-left: 20px;
    }

    .event {
        padding: 32px;
        margin: 48px 0; 
        position: relative;
        &::before{
            content: "";
            width: 15px;
            height: 15px;
            border: 2px solid #6196E4;
            position: absolute;
            left: -34.5px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            background-color: #020215;
            transition: all 500ms;
        }
        &:hover::before{
            background: #6196E4;
        }        
    }

    h1 {
        font-size: 32px;
        color: #fff;
        font-weight: bold;
        @media (max-width: 1050px){
            font-size: 25px;
        }
    }
`

const Experience = () => (
    <div className="text-base desktop:text-lg font-sans font-thin">
        <h1 className="text-themeBlue font-bold text-3xl flex justify-center">Experiencia</h1>
        <TimelineContainer>
            <div className="event">
                <div className="text-xs desktop:mb-2 mb-0">Diciembre 2020&nbsp;&nbsp;|&nbsp;&nbsp;Actualidad*</div>
                <h1 className="desktop:mb-2 mb-0">Desarrollo Web</h1>
                <LinkHover 
                    url={'https://blissddm.xyz/es/'}
                    classNames={'font-bold mb-2'}
                    text={'Bliss DDM'}
                />
                <div className="timeline-content">
                    <p>
                        Diseño y desarrollo de Aplicaciones Web, Paginas Web, utilizando las mejores tecnologias actuales como GatsbyJS, ReactJS, dando como meta la experiencia de usuario y desarrollador en diversos proyectos:
                    </p>
                    <ul className="text-base">
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                                url={'https://compassionate-hugle-523072.netlify.app/'}
                                classNames={''}
                                text={'Buscador Recetas de Bebidas'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://stoic-villani-cab0e7.netlify.app/'}
                            classNames={''}
                            text={'Buscador de Imagenes'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://zealous-aryabhata-13f1e7.netlify.app/'}
                            classNames={''}
                            text={'Cotizador de Criptomonedas'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://laughing-jennings-4e8012.netlify.app/'}
                            classNames={''}
                            text={'App Clima'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://condescending-wright-d1e099.netlify.app/'}
                            classNames={''}
                            text={'Cotizador de seguros'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://frosty-thompson-be58ba.netlify.app/'}
                            classNames={''}
                            text={'Administrador de gasto semanal'}
                            />
                        </li>
                        <li>
                            <font className="text-white">&#8226; </font>
                            <LinkHover 
                            url={'https://fervent-borg-fc19d5.netlify.app/'}
                            classNames={''}
                            text={'Administrador de pacientes - Veterinaria'}
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="event">
                <div className="text-xs desktop:mb-2 mb-0">Enero 2020&nbsp;&nbsp;|&nbsp;&nbsp;Junio 2020 </div>
                <h1>Software de Gestion de Proyectos</h1>
                <div className="timeline-content">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eaque enim neque error quas ipsa, impedit sed perferendis dolor repudiandae, culpa maiores fugit ea repellat. Ipsam repellat quos reprehenderit amet cumque autem. Cupiditate perspiciatis sapiente assumenda nisi, ea harum id fuga repellendus, quis labore in! Necessitatibus dolore laudantium nihil? Provident.
                    </p>
                </div>
            </div>

            <div className="event">
                <div className="event-date">Enero 2010</div>
                <h1>Titulo del acontecimiento</h1>
                <div className="timeline-content">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eaque enim neque error quas ipsa, impedit sed perferendis dolor repudiandae, culpa maiores fugit ea repellat. Ipsam repellat quos reprehenderit amet cumque autem. Cupiditate perspiciatis sapiente assumenda nisi, ea harum id fuga repellendus, quis labore in! Necessitatibus dolore laudantium nihil? Provident.
                    </p>
                </div>
            </div>
        </TimelineContainer>
    </div>
)
 
export default Experience;