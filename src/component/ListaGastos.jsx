import { Link } from 'react-router-dom'
import useObtenerGasto from '../hooks/useObtenerGasto'
import  { ReactComponent as Undo} from '../img/undo.svg'
import BarraTotalGastado from './BarraTotalGastado'
import IconosCategoria from '../element/IconosCategoria'
import conversorMoneda from '../funciones/ConversorMoneda'
import  { ReactComponent as Trash} from '../img/trash.svg'
import  { ReactComponent as Edit} from '../img/edit.svg'
import  { ReactComponent as Add} from '../img/add.svg'


const ListaGastos = () => {
const [gastos] = useObtenerGasto();
console.log(gastos);
 
return (
    <>
    <div>ListaGastos</div>
    <Link to="/">
 <button><Undo/></button>
    </Link>
   <div>
     {gastos.map((gasto) => {
       return(
       <div key={gasto.id}>
         <li>
         <IconosCategoria id={gasto.categoria}/>
             {gasto.categoria}
             </li>
             <li>
               {gasto.descripcion}
             </li>
             <li>
               {conversorMoneda(gasto.cantidad)}
             </li>
             <div>
             <Link to={`/Editar/${gasto.id}`}>
               <button ><Edit/></button>
               </Link>
               <button><Trash/></button>
             </div>
            </div>
       
       ); 
     })}
   <div><button>Cargar Más</button></div>
   {gastos.length === 0 && 
   <span>
     <p>No Has Agregado Gastos</p>
     <Link to="/">
     <button><Add/></button>
     </Link>
   </span>
   }
   </div>
    <BarraTotalGastado/>
    </>
  )
}

export default ListaGastos