import { useState , useEffect} from 'react'
import { ReactComponent as Add } from '../img/add.svg'
import SelectCategorias from './SelectCategorias';
import agregarGasto from './agregarGastoFirebase'
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from '../Context';
import { fromUnixTime } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import editarGasto from './editarGastoFirebase';

const FormularioGasto = ({gasto}) => {

  const [inputDescripcion, cambiarInputDescripcion] = useState('');
  const [inputCantidad, cambiarInputCantidad] = useState('');
  const [categoria, cambiarCategoria] = useState('Ahorro');
  const [fecha, cambiarFecha] = useState(new Date());


  const { usuario } = useAuth();
  const navigate = useNavigate();

useEffect(()=> {
  //comprobar si hay gastos
  if(gasto){

    //comprobar que el gasto es del usuario actaual,uid
if(gasto.data().uidUsuario === usuario.uid){
      cambiarCategoria(gasto.data().categoria);
      cambiarFecha(fromUnixTime(gasto.data().fecha));
      cambiarInputDescripcion(gasto.data().descripcion);
      cambiarInputCantidad(gasto.data().cantidad);
} else {
   navigate('/listaGastos');
}
  }
}, [gasto, usuario, navigate]);

  const handleChange = (e) => {
    if (e.target.name === 'descripcion') {
      cambiarInputDescripcion(e.target.value);
    } else if (e.target.name === 'cantidad') {
      cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
    }
  }
  console.log(fecha)

  const handleSubmit = (e) => {
    e.preventDefault();
    let cantidad = parseFloat(inputCantidad).toFixed(3);

    if (inputDescripcion !== '' && inputCantidad !== '') {

    if(cantidad){
      if(gasto){
       editarGasto({
         id: gasto.id,
         categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: cantidad,
          fecha: getUnixTime(fecha),
       }).then(() => {
         navigate('/listaGastos');
       }).catch((error) => {
        console.log(error);
       })
      }else {
        agregarGasto({
          categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: cantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid,
  
        })
          .then(() => {
            cambiarCategoria('Ahorro');
            cambiarInputCantidad('');
            cambiarInputDescripcion('');
            cambiarFecha(new Date());
  
            alert('Gasto Agregado');
          })
          .catch((error) => {
            alert('error')
          })
      }
    }

    } else {
      alert('rellena todos los campos')
    }


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
        <button type='submit'>{gasto ? 'Editar Gasto': 'Agregar Gasto'} <Add /></button>
      </div>
    </form>
  )
}

export default FormularioGasto