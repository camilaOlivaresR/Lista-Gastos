import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BarraTotalGastado from './component/BarraTotalGastado'
import BtnCerrarSesion from './component/BtnCerrarSesion'
import FormularioGasto from './component/FormularioGasto'
import Header from './element/Header'


const App = () => {
  
  return (
    <>
    {/* <Helmet>
      <title>Agregar Gasto</title>
    </Helmet> */}
    
    <Header></Header>
    <ContenedorBotones>
      <Link to="/gastos">
       <button>Categorias</button>
       </Link>
       <Link to="/listaGastos ">
      <button>Lista de Gastos</button>
      </Link>
      <BtnCerrarSesion/>
      </ContenedorBotones>
      <FormularioGasto/>
      <BarraTotalGastado/>
    </>
  )
}

export default App

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
