
import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <ContenedorHeader>
    <Headers>
    <Titulo>Agregar Gasto</Titulo>
  </Headers>
  </ContenedorHeader>

  )
}

export default Header;

const Headers = styled.div`
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
`;
 

