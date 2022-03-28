import React from 'react'
import { Link } from 'react-router-dom'
import  { ReactComponent as Undo} from '../img/undo.svg'

const Gastos = () => {
  return (
    <>
    <div>Gastos</div>
    <Link to="/">
 <button><Undo/></button>
    </Link>
    </>
  )
}

export default Gastos