import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BarraTotalGastado from './component/BarraTotalGastado'
import BtnCerrarSesion from './component/BtnCerrarSesion'
import FormularioGasto from './component/FormularioGasto'

const App = () => {
  return (
    <>
    <Helmet>
      <title>Agregar Gasto</title>
    </Helmet>
    <div>
      <div>
      <p>Agregar Gasto</p>
      </div>
      <Link to="/gastos">
       <button>Categorias</button>
       </Link>
       <Link to="/listaGastos ">
      <button>Lista de Gastos</button>
      </Link>
      <BtnCerrarSesion/>
      </div>
      <FormularioGasto/>
      <BarraTotalGastado/>
    </>
  )
}

export default App