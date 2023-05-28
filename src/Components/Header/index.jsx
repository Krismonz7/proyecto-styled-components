import React from "react";
import logo from "../../assets/images/logo.svg";
import { styled } from "styled-components";
import { colorPrimario, fondoClaro } from "../UI/variables";

const StyledHeader = styled.div`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;


const BtnHeaderPrimario =  styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${({primary}) => primary ? "white" : colorPrimario};
  background: ${({primary}) => primary ? "transparent" : "white"};
`

const Header = () => {
  return (

    <StyledHeader className="header">
      <Logo className="imagen-logo" src={logo} alt="Logo Smart Bank"/>
      <div>
        <BtnHeaderPrimario  className="btn-secundario" href="https://google.com">
          Ayuda
        </BtnHeaderPrimario>
        <BtnHeaderPrimario primary href="https://google.com">
          Salir
        </BtnHeaderPrimario>
      </div>
    </StyledHeader>
  );
};

export default Header;
