import { Link } from 'react-router-dom'
import  { ReactComponent as Undo} from '../img/undo.svg'
import BarraTotalGastado from './BarraTotalGastado'



const ListaGastos = () => {

 
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