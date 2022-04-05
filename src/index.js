import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InicioSesion from './component/InicioSesion';
import Gastos from './component/Gastos';
import ListaGastos from './component/ListaGastos';
import Registro from './component/Registro';
import Editar from './component/Editar';
import { Helmet } from "react-helmet";
import logo from './img/logo.svg';
import { AuthProvider } from './Context';

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={logo} type='imagen/x-icon' />
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/inicioSesion' element={<InicioSesion />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/gastos' element={<Gastos />} />
            <Route path='/listaGastos' element={<ListaGastos />} />
            <Route path='/editar/:id' element={<Editar />} />
            <Route path='/' element={<App />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));

