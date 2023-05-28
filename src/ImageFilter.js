import Icono from './Components/UI';
import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import React from 'react';

export default (type) => {
    

    
    
    const images = {
        Restaurante: <Icono src={alimentacion} alt='#' />,
        Salud : <Icono src={salud} alt='#' />,
        Otros: <Icono src={otros} alt='#' />,
        Transporte: <Icono src={transporte} alt='#' />,
        Utilidades: <Icono src={utilidades} alt='#' />,
        Defalut : <Icono src={otros} alt='#'/>
    };
    
    return images[type] || images["Defalut"];
}