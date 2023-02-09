import React from 'react'

import conversorMoneda from '../funciones/ConversorMoneda'
import { useTotalDelMes } from '../contexto/TotalGastoMes' 
import styled from 'styled-components';

const BarraTotalGastado = () => {
  const {total} = useTotalDelMes();
  
  return (
    <BarraTotal>
        <p>Barra Total Gastado {conversorMoneda(total)}</p>
        </BarraTotal>
    
  )
}


export default BarraTotalGastado

const BarraTotal = styled.div`
    background: red;
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;