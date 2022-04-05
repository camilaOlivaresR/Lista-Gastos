import React from 'react'
import { ReactComponent as Cerrar } from '../img/x.svg'
import { useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


const BtnCerrarSesion = () => {
    const navigate = useNavigate();

    const cerrarSesion = async () => {
        try {
            await signOut(auth);
            navigate('/inicioSesion');
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
           
                <button onClick={cerrarSesion}><Cerrar /></button>
         
        </>
    )
}

export default BtnCerrarSesion