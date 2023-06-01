import { IconoTema , Icono } from './Components/UI';
import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import React from 'react';

export default (type) => {
    

    
    
    const images = {
        Restaurante: <IconoTema src={alimentacion} alt='#' />,
        Salud : <IconoTema src={salud} alt='#' />,
        Otros: <IconoTema src={otros} alt='#' />,
        Transporte: <IconoTema src={transporte} alt='#' />,
        Utilidades: <IconoTema src={utilidades} alt='#' />,
        Defalut : <IconoTema src={otros} alt='#'/>
    };
    
    return images[type] || images["Defalut"];
}