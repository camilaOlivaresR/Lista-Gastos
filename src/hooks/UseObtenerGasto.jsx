import {useState, useEffect} from 'react'
import {db} from '../firebase'
import {useAuth} from '../Context';
import { collection, onSnapshot, query, orderBy, where, limit } from 'firebase/firestore'
 

//creacion de HOOks
const useObtenerGasto = () => {
  const {usuario} = useAuth();
    const [gastos, cambiarGastos] = useState([]);
    const[ultimoGasto, cambiarUltimoGasto] = useState(null);
    const[hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);
 
    const obtenerMasGastos = () => {

    }

    useEffect(()=> {
 
      const consulta = query(
    collection(db, 'gastos'),
    where('uidUsuario', '==', usuario.uid),
    orderBy('fecha', 'desc'),
    limit(10)

  );

  const unsuscribe = onSnapshot(consulta, (snapshot) => {
     if(snapshot.docs.length > 0){
       cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1 ]);
       cambiarHayMasPorCargar(true);
     } else {
       cambiarHayMasPorCargar(false);
     }
     cambiarGastos(snapshot.docs.map((gasto)=> {
       return{...gasto.data(), id: gasto.id}
     }));
  })

return unsuscribe;
    }, [usuario]);
    return[gastos, obtenerMasGastos, hayMasPorCargar];
}

export default useObtenerGasto;