import { Link } from 'react-router-dom'
import useObtenerGasto from '../hooks/useObtenerGasto'
import { ReactComponent as Undo } from '../img/undo.svg'
import BarraTotalGastado from './BarraTotalGastado'
import IconosCategoria from '../element/IconosCategoria'
import conversorMoneda from '../funciones/ConversorMoneda'
import { ReactComponent as Trash } from '../img/trash.svg'
import { ReactComponent as Edit } from '../img/edit.svg'
import { ReactComponent as Add } from '../img/add.svg'
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import { borrarGasto } from './borrarGasto'

const ListaGastos = () => {
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGasto();
  console.log(gastos);
  const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", { locale: es });
  }

  const fechaIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaAnterior = formatearFecha(gastos[index - 1].fecha);

      if (fechaActual === fechaAnterior) {
        return true;

      } else {
        return false;
      }
    }
  }

  return (
    <>
      <div>ListaGastos</div>
      <Link to="/">
        <button><Undo /></button>
      </Link>
      <div>
        {gastos.map((gasto, index) => {
          return (
            <div key={gasto.id}>
              {!fechaIgual(gastos, index, gasto) &&
                <span >
                  {formatearFecha(gasto.fecha)}
                </span>
              }
              <div key={gasto.id}>
                <li>
                  <IconosCategoria id={gasto.categoria} />
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
                    <button ><Edit /></button>
                  </Link>
                  <button onClick={() => borrarGasto(gasto.id)}><Trash /></button>
                </div>
              </div>
            </div>
          );
        })}

        {hayMasPorCargar &&
        <div>
          <button onClick={() => obtenerMasGastos()}>Cargar Más</button>
        </div>
        }
        {gastos.length === 0 &&
          <span>
            <p>No Has Agregado Gastos</p>
            <Link to="/">
              <button><Add /></button>
            </Link>
          </span>
        }
      </div>
      <BarraTotalGastado />
    </>
  )
}

export default ListaGastos