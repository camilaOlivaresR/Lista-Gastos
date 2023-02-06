import React from 'react'
import Btn from '../element/Btn'
import IconosCategoria from '../element/IconosCategoria'
import useObtenerGastoCategoria from '../hooks/useObtenerGastoPorCategoria'
import BarraTotalGastado from './BarraTotalGastado'


const Gastos = () => {
  const gastoPorCategoria = useObtenerGastoCategoria();
  console.log(gastoPorCategoria)

  return (
    <>
    <div>
      
      Gastos por Categoria
    <Btn/>
    </div>
    <div>
      {gastoPorCategoria.map((elemento, index) => {
        return (
         <div key={index}>
          
              <IconosCategoria id={elemento.categoria} />           
               {elemento.categoria}
               
               <li>{elemento.cantidad}</li>
             
            
          </div>

          
          
      )})}
    </div>
    <BarraTotalGastado/>
    </>
  )
}

export default Gastos