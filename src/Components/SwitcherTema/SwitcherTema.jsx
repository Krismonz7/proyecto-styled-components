import React from 'react';
import themeOn from '../../assets/images/themeOn.svg';
import themeOff from '../../assets/images/themeOff.svg';
import {Icono} from '../UI/index';



export default ({tema,cambio})=> {
    console.log(tema)
  const claro = <Icono src={themeOn}/>
  const oscuro = <Icono src={themeOff}/>

  return <>{tema ? oscuro : claro}</>;
};