import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';
import Contenedor from '../element/Container';

const InicioSesion = () => {
  const navegate = useNavigate();
  const [correo, establecerCorreo] = useState('');
  const [clave, establecerClave] = useState('');


  const handleChange = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'email') {
        establecerCorreo(e.target.value);
     } else if (e.target.name === 'password'){
        establecerClave(e.target.value);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(correo, clave);

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      console.log('wtf')
      return;
    }
    if (correo === '' || clave === '') {
      console.log('rellenar');
      return;
    
  
    }
    try {
      await signInWithEmailAndPassword(auth, correo, clave);
      navegate("/");
      console.log('usuario registrado')
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje = 'contraseña no es correcta'
          break;
        case 'auth/user-not-found':
          mensaje = 'no existe cuenta'
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
        <title>Iniciar Sesion</title>
      </Helmet>
      <Contenedor>Iniciar Sesion
     
      <div>
      <ContenedorInicio onSubmit={handleSubmit}>
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
        <button type='submit'>Iniciar Sesion</button>
      </ContenedorInicio>
      </div>
    

        <div>
        <Link to='/registro'>
          <button >Registrarse</button>
        </Link>
        </div>
     
     </Contenedor>
    </>
  )
}

export default InicioSesion

const ContenedorInicio = styled.form`
   
  display: flex;
  flex-direction: column;
  width: 300px;  /* Or whatever */
  height: 90px;
  margin: auto;
  justify-content: space-around;




`;

const ContenedorRegister = styled.div`

  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 15px;
 
`;
