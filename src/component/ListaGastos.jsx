import { Link } from 'react-router-dom'
import UseObtenerGasto from '../hooks/UseObtenerGasto'
import { useState } from 'react'
import  { ReactComponent as Undo} from '../img/undo.svg'
import BarraTotalGastado from './BarraTotalGastado'



const ListaGastos = () => {
const [gastos] = UseObtenerGasto();
console.log(gastos);
 
return (
    <>
    <div>ListaGastos</div>
    <Link to="/">
 <button><Undo/></button>
    </Link>
    <BarraTotalGastado/>
    </>
  )
}

export default ListaGastos