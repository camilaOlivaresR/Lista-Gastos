import React from 'react'
import conversorMoneda from '../funciones/ConversorMoneda'
import { useTotalDelMes } from '../contexto/TotalGastoMes' 

const BarraTotalGastado = () => {
  const {total} = useTotalDelMes();
  
  return (
    <div>
        <p>Barra Total Gastado {conversorMoneda(total)}</p>
        </div>
    
  )
}

export default BarraTotalGastado