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
import { AuthProvider } from './contexto/Context';
import RutaPrivada from './component/RutaPrivada';
import { TotalGastadoProvider } from './contexto/TotalGastoMes'

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={logo} type='imagen/x-icon' />
      </Helmet>
      <AuthProvider>
       <TotalGastadoProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/inicioSesion' element={<InicioSesion />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/gastos' element={
                <RutaPrivada >
                  <Gastos />
                </RutaPrivada>
              } />
              <Route path='/listaGastos' element={
                <RutaPrivada>
                  <ListaGastos />
                </RutaPrivada>} />
              <Route path='/editar/:id' element={
                <RutaPrivada >
                  <Editar />
                </RutaPrivada>
              } />
              <Route path='/' element={
                <RutaPrivada>
                  <App />
                </RutaPrivada>
              } />

            </Routes>
          </BrowserRouter>
       
          </TotalGastadoProvider>
      </AuthProvider>
    </>
  );
}


ReactDOM.render(<Index />, document.getElementById('root'));

