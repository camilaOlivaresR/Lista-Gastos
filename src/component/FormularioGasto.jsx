import { useState } from 'react'
import { ReactComponent as Add } from '../img/add.svg'
import SelectCategorias from './SelectCategorias';
import agregarGasto from './AgregarGastoFirebase'
import DatePicker from './DatePicker';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from '../Context';

const FormularioGasto = () => {
  const [inputDescripcion, cambiarInputDescpcion] = useState('');
  const [inputCantidad, cambiarInputCantidad] = useState('');
  const [categoria, cambiarCategoria] = useState('ahorro');
  const [fecha, cambiarFecha] = useState(new Date());

  const{usuario} = useAuth();

  const handleChange = (e) => {
    if (e.target.name === 'descripcion') {
      cambiarInputDescpcion(e.target.value);
    } else if (e.target.name === 'cantidad') {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
    }
  }
  console.log(fecha)

  const handleSubmit = (e) =>{
    e.preventDefault();
    let cantidad = parseFloat(inputCantidad).toFixed(0);

    agregarGasto({
      categoria: categoria,
      descripcion: inputDescripcion,
      cantidad: cantidad,
      fecha: getUnixTime(fecha),
      uidUsuario: usuario.uid,

    });
  }

  return (

    <form onSubmit={handleSubmit}>

      <span>
        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
      </span>
      <div>
        <DatePicker
        fecha={fecha}
        cambiarFecha={cambiarFecha}
        />
      </div>

      <div>
        <input
          type="text"
          name='descripcion'
          id='descripcion'
          placeholder='Descripcion Gasto'
          value={inputDescripcion}
          onChange={handleChange}
        />
        <input
          type="text"
          name='cantidad'
          id='cantidad'
          placeholder='$0.000'
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type='submit'>Agregar Gasto <Add /></button>
      </div>
    </form>
  )
}

export default FormularioGasto