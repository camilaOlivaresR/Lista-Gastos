import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BtnCerrarSesion from './component/BtnCerrarSesion'

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
    </>
  )
}

export default App