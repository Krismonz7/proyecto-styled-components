import React from "react";
import styled from 'styled-components';

const Titulo =  styled.h1`
  color: ${(theme)=>theme.text};
  padding: 25px 0;`

const Title = ({ children }) => {
  return <Titulo>{children}</Titulo>;
}; 
export default Title;
