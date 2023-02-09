import { useState , useEffect} from 'react'
import { ReactComponent as Add } from '../img/add.svg'
import SelectCategorias from './SelectCategorias';
import agregarGasto from './agregarGastoFirebase'
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from '../contexto/Context';
import { fromUnixTime } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import editarGasto from './editarGastoFirebase';
import styled from 'styled-components';

const FormularioGasto = ({gasto}) => {

  const [inputDescripcion, cambiarInputDescripcion] = useState('');
  const [inputCantidad, cambiarInputCantidad] = useState('');
  const [categoria, cambiarCategoria] = useState('');
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
            cambiarCategoria('');
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

    <Formulario onSubmit={handleSubmit}>

      <ContenedorFiltros>

      <div>
        <DatePicker
          fecha={fecha}
          cambiarFecha={cambiarFecha}
        />
      </div>

        <SelectCategorias
          categoria={categoria}
          cambiarCategoria={cambiarCategoria}
        />
      </ContenedorFiltros>
     
      <div>
        <Input
          type="text"
          name='descripcion'
          id='descripcion'
          placeholder='Descripcion Gasto'
          value={inputDescripcion}
          onChange={handleChange}
        />
        <Input
          type="number"
          name='cantidad'
          id='cantidad'
          placeholder='$0.000'
          value={inputCantidad}
          onChange={handleChange}
        />
      </div>
      <ContenedorBoton>
        <button type='submit'>{gasto ? 'Editar Gasto': 'Agregar Gasto'} <Add /></button>
      </ContenedorBoton>
    </Formulario>
  )
}

export default FormularioGasto


const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Formulario = styled.form`
    padding: 0 2.5rem; /* 40px */
 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Input = styled.input`
    font-size: 2.5rem; /* 40px */
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ;
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2.2rem; /* 24px */
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */
`;