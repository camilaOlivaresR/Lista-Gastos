import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Registro = () => {


  const navegate = useNavigate();
  const [correo, establecerCorreo] = useState('');
  const [clave, establecerClave] = useState('');
  const [clave2, establecerClave2] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name)
    switch (e.target.name) {
      case 'email':
        establecerCorreo(e.target.value);
        break;
      case 'password':
        establecerClave(e.target.value);
        break;
      case 'password2':
        establecerClave2(e.target.value);
        break;
      default:
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(correo, clave, clave2);

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      console.log('wtf')
      return;
    }
    if (correo === '' || clave === '' || clave2 === '') {
      console.log('rellenar');
      return;
    }
    if (clave !== clave2) {
      console.log('error claves');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, correo, clave);
      navegate("/gastos");
      console.log('usuario registrado')
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case 'auth/invalid-password':
          mensaje = '6 caracteres'
          break;
        case 'auth/email-already-in-use':
          mensaje = 'ya existe email'
          break;
        case 'auth/invalid-email':
          mensaje = 'correo no valido'
          break;
        default:
          mensaje = 'error al crear cuenta'
          break;
      }
      console.log(mensaje);
    }



  }

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <div>Registro de Usuarios</div>
      <div>
        <Link to='/inicioSesion'>
          <button >Iniciar Sesion</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Correo Electronico'
          value={correo}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Contraseña'
          value={clave}
          onChange={handleChange}

        />
        <input
          type='password'
          name='password2'
          placeholder='Repetir Contraseña'
          value={clave2}
          onChange={handleChange}

        />
        
          <button type='submit'>Crear Cuenta</button>
        
      </form>
    </>
  )
}

export default Registro