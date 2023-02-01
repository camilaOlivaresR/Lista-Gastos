import { useState , useEffect} from "react";
import { useAuth } from "../contexto/Context";
import { db } from "../firebase";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { collection, onSnapshot, query, orderBy, where} from "firebase/firestore";

const useObtenerGastoDelMes = () => {
    const [gastos, establecerGastos] = useState([]);
    const {usuario} = useAuth();



useEffect(() => {

    const inicioDeMes = getUnixTime(startOfMonth(new Date()));
    const finDeMes = getUnixTime(endOfMonth(new Date()));

//   console.log(inicioDeMes, finDeMes);

    if (usuario) {
        const consulta = query(
            collection(db, 'gastos'),
            orderBy('fecha', 'desc'),
            where('fecha', '>=', inicioDeMes),
            where('fecha', '<=', finDeMes),
            where('uidUsuario', '==', usuario.uid)
        );

        const unsuscribe = onSnapshot(consulta, (snapshot) => {
            establecerGastos(snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}

            }))
          
        }, (error) => {console.log(error)});
        return unsuscribe;
    }

}, [usuario])






    
    return gastos;
}
export default useObtenerGastoDelMes;