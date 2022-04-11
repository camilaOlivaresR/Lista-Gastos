import React from 'react'
import ConversorMoneda from '../funciones/ConversorMoneda'

const BarraTotalGastado = () => {
  return (
    <div>
        <p>Barra Total Gastado {ConversorMoneda(0.00)}</p>
        </div>
    
  )
}

export default BarraTotalGastado