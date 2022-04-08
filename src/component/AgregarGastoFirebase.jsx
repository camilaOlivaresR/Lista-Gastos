import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const agregarGasto = ({ categoria, descripcion, cantidad, fecha, uidUsuario }) => {
    return addDoc(collection(db, 'gastos'), {
        categoria: categoria,
        descripcion: descripcion,
        cantidad: cantidad,
        fecha: fecha,
        uidUsuario: uidUsuario
    })



}

export default agregarGasto;