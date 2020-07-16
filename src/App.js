import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contendor = styled.div`
  display:flex;
  align-items:center;
  padding-top: 3rem;
  flex-direction:column;
  @media (max-width:728px) {
  display:flex;
  align-items:center;
  min-width:100%;
  padding-top: 2rem;
  margin-top:-400px;
  flex-direction:column;
  }
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left,#007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  margin-bottom:1rem;
  padding: 1rem 3rem;
  font-size:1rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  border-radius:30px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;

function App() {

  const [frase, setFrase] = useState({});

  useEffect(() => {
    consultarAPI()
  }, [])

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setFrase(phrase[0]);
    document.getElementById("boton").blur();
  };


  return (
    <Contendor>
      <Frase
        frase={frase}
      />
      <Boton
        id="boton"
        onClick={consultarAPI}
      >Obtener Frase
      </Boton>
    </Contendor>
  );
}

export default App;
