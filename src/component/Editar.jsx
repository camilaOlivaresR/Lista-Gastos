import {Helmet} from 'react-helmet';
import Btn from '../element/Btn';
import BarraTotalGastado from './BarraTotalGastado';
import FormularioGasto from './FormularioGasto';
import { useParams } from 'react-router-dom';
import useObtenerUnGasto from '../hooks/useObtenerUnGasto';



const Editar = () => {
  const {id} = useParams();
  const [gasto] = useObtenerUnGasto(id);
  return (
    <>
    <Helmet>
      <title>Editar Gasto</title>
    </Helmet>
    <header>
    <div>Editar Gasto</div>
    </header>
    <Btn ruta='/listaGastos' />
    <FormularioGasto gasto={gasto}/>
    <BarraTotalGastado/>

    </>
  )
}

export default Editar