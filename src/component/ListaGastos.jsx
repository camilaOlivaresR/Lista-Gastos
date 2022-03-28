import React from 'react'
import { Link } from 'react-router-dom'
import  { ReactComponent as Undo} from '../img/undo.svg'

const ListaGastos = () => {
  return (
    <>
    <div>ListaGastos</div>
    <Link to="/">
 <button><Undo/></button>
    </Link>
    </>
  )
}

export default ListaGastos