import React, { useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import {GlobalStyles} from "./GlobalStyles";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from './Components/UI/index'
import { ThemeProvider } from "styled-components";
import SwitcherTema from "./Components/SwitcherTema/SwitcherTema";

function App() {
  const [tema,setTema] = useState(true);

  const toggleTema = ()=>{
    setTema((tema) => !tema);
    console.log(tema);
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro} >
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} cambio={toggleTema}/>
      </BtnTema>
      <GlobalStyles/>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
