import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const useObtenerUnGasto = (id) => {
    const navigate = useNavigate();
    const [gasto, establecerGasto] = useState('');

    useEffect(() => {
        const obtenerGasto = async () => {
            const documento = await getDoc(doc(db, 'gastos', id));
            if(documento.exists){
                establecerGasto(documento);
            } else {
                navigate('/listaGastos');
            }
        }
        obtenerGasto();

    }, [navigate, id]);

    return [gasto]
}

export default useObtenerUnGasto