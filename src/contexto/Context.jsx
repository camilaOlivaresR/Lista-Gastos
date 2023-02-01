import {createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

//OBSERVADOR
const ContextoGlobal = createContext();

const useAuth = () => {

    return useContext(ContextoGlobal);
}

const AuthProvider = ({ children }) => {
    const [usuario, cambioUsuario] = useState();
    const [cargando, cambiarCargando] = useState(true);


    //efecto ejecutar comprobacion una sola vez
    useEffect(() => {
        //comprobar si hay un usuario.
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
            cambioUsuario(usuario);
            cambiarCargando(false);

        });
        return cancelarSuscripcion;
    }, []);
    return (
        <ContextoGlobal.Provider value={{ usuario: usuario }}>
            {!cargando && children}
        </ContextoGlobal.Provider>
    )
}

export { AuthProvider, ContextoGlobal, useAuth };