import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Registro = () => {
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
    <form>
      <input
      type='email'
      name='email'
      placeholder='Correo Electronico'
      />
        <input
      type='password'
      name='password'
      placeholder='Contraseña'
      />
         <input
      type='password'
      name='password2'
      placeholder='Repetir Contraseña'
      />
      <button type='submit'>Crear Cuenta</button>
    </form>
    </>
  )
}

export default Registro