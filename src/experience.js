import React, { Component } from 'react'
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
        padding-left: 0px;
    }
    .timeline{
        display: none;
    }

    .event {
        padding: 32px;
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
            @media (max-width: 1050px){
                left: -9.5px;
            }
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
    button {
        background-color: transparent;
        color: #6196E4;
        font-weight: bold;
        font-size: 10px;
        border-width: 1px;
        border-color: #6196E4;
        border-radius: 9999px;
        transition: all 800ms;

        &:hover{
            background-color: #6196E4;
            color: white;
            border-color: transparent;
        }
    }
`
class Experience extends Component {
    
    state = {
        divContainerBliss:false,
        divContainerUAEH:false,
        divContainerHolcim:false,
        divContainerLegacyier:false
    }
    render(){
        var HandleChangeBliss = e => {
            this.setState({divContainerBliss:!this.state.divContainerBliss})
        }
        var HandleChangeUAEH = e => {
            this.setState({divContainerUAEH:!this.state.divContainerUAEH})
        }
        var HandleChangeHolcim = e => {
            this.setState({divContainerHolcim:!this.state.divContainerHolcim})
        }
        var HandleChangeLegacyier = e => {
            this.setState({divContainerLegacyier:!this.state.divContainerLegacyier})
        }
        const xBLISS = this.state.divContainerBliss;
        const xUAEH = this.state.divContainerUAEH;
        const xHolcim = this.state.divContainerHolcim;
        const xLegacyier = this.state.divContainerLegacyier;
    return(
    <div id="experience" className="text-base desktop:text-lg font-sans font-thin">
        <h1 className="text-themeBlue font-bold text-3xl flex justify-center">Experiencia</h1>
        <TimelineContainer>
            <div className="event flex flex-col">
                <div className="text-xs desktop:mb-2 mb-0">Diciembre 2020&nbsp;&nbsp;|&nbsp;&nbsp;Actualidad*</div>
                <h1>Desarrollo Web</h1>
                <ol>
                    <LinkHover 
                    url={'https://blissddm.xyz/es/'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'BLISS DDM'}
                    />
                </ol>
                <ol className="mb-2">
                    <button className="sm:px-2 px-1.5 sm:py-0.05" onClick={HandleChangeBliss}>
                        {xBLISS ? 'Menos Informacion' : 'Mas Informacion'}
                    </button>
                </ol>
                {
                    xBLISS && (

                <div
                    className="timeline-content transition translate-x-10 duration-500">
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
                    )
                }
            </div>

            <div className="event">
                <div className="text-xs desktop:mb-2 mb-0">Enero 2020&nbsp;&nbsp;|&nbsp;&nbsp;Junio 2020 </div>
                <h1>Software de Gestion de Proyectos</h1>
                <div className="text-themeBlue">
                    <LinkHover 
                    url={'https://www.uaeh.edu.mx/campus/tlahuelilpan/'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'UAEH'}
                    />
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <LinkHover 
                    url={'#'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'RAXE-TECH'}
                    />
                    
                </div>
                <ol className="mb-2">
                    <button className="sm:px-2 px-1.5 sm:py-0.05" onClick={HandleChangeUAEH}>
                        {xUAEH ? 'Menos Informacion' : 'Mas Informacion'}
                    </button>
                </ol>
                {
                    xUAEH && (

                <div className="timeline-content">
                    <p>
                        <font className="font-normal">ASIST - PROY</font> es un software para la admistracion de proyectos empresariales, permite llevar un control minucioso de cada uno de los proyectos de la empresa. Esto implica diversas partes de trabajo como planificacion, desarrollo, produccion, asignacion de tareas, tiempo de desarrollo, etc. Desarrollado para la Universidad Autonoma del Estado de Hidalgo por el equipo de RAXE - TECH.
                    </p>
                </div>
                    )
                }
            </div>

            <div className="event">
                <div className="text-xs desktop:mb-2 mb-0">Enero 2019&nbsp;&nbsp;|&nbsp;&nbsp;Junio 2019 </div>
                <h1>Software Costeo Mano de Obra</h1>
                <div className="text-themeBlue">
                    <LinkHover 
                    url={'https://www.holcim.com.mx/'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'HOLCIM'}
                    />
                    &nbsp;|&nbsp;
                    <LinkHover 
                    url={'#'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'SQDESARROLLO'}
                    />
                    &nbsp;|&nbsp;
                    <LinkHover 
                    url={'#'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'RAXE-TECH'}
                    />
                    
                </div>
                <ol className="mb-2">
                    <button className="sm:px-2 px-1.5 sm:py-0.05" onClick={HandleChangeHolcim}>
                        {xHolcim ? 'Menos Informacion' : 'Mas Informacion'}
                    </button>
                </ol>
                {
                    xHolcim && (

                <div className="timeline-content">
                    <p>
                        <font className="font-normal">Proyecto CMO</font> es un software diseñado para la empresa Holcim que permite el calculo de de la mano de obra en dicha empresa, los calculos se llevan acabo bajo diferentes parametros haciendo que el proyecto sea lo mas rentable posible y calculando el capital requerido para dicho proyecto, este proeycto fue desarrollado entre SQDESARROLLO y RAXE - TECH  
                    </p>
                </div>
                    )
                }
            </div>

            <div className="event">
                <div className="text-xs desktop:mb-2 mb-0">Enero 2015</div>
                <h1>Edicion profesional de Video, Fotografia y Animaciones</h1>
                <div className="text-themeBlue">
                    <LinkHover 
                    url={'#'}
                    classNames={'font-bold mb-2 text-base'}
                    text={'LEGACYIER'}
                    />
                    
                </div>
                <ol className="mb-2">
                    <button className="sm:px-2 px-1.5 sm:py-0.05" onClick={HandleChangeLegacyier}>
                        {xLegacyier ? 'Menos Informacion' : 'Mas Informacion'}
                    </button>
                </ol>
                {
                    xLegacyier && (

                <div className="timeline-content">
                    <p>
                        Edicion profesional de Fotografia, Video y Animaciones, manejo de aplicaciones profesionales como Photoshop, Cinema4D, Sony Vegas, libreria de Adobe, etc.
                        Manejo de anuncios publicitarios, estrategias de Marketing, creador de Logos y Marcas 
                    </p>
                </div>
                    )
                }
            </div>
        </TimelineContainer>
    </div>
    )}}
 
export default Experience;