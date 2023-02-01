import React from 'react'
import { useAuth } from '../contexto/Context';
import {Navigate} from 'react-router-dom';

const RutaPrivada = ({ children}) => {
    const { usuario } = useAuth();

    if (usuario) {
        return children;
    } else {
        return <Navigate replace to ='/inicioSesion'/>
    }
}


    export default RutaPrivada;