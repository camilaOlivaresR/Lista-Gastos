import React from 'react'
import Btn from '../element/Btn'
import useObtenerGastoCategoria from '../hooks/useObtenerGastoPorCategoria'
import BarraTotalGastado from './BarraTotalGastado'

const Gastos = () => {
  useObtenerGastoCategoria();
  return (
    <>
    <div>Gastos por Categoria</div>
    <Btn/>
    <BarraTotalGastado/>
    </>
  )
}

export default Gastos