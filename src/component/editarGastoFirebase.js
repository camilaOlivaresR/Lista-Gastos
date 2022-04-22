import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const editarGasto = async ({ categoria, descripcion, cantidad, fecha , id}) => {
    const documento = doc(db, 'gastos', id);
    return await updateDoc(documento, {
        categoria: categoria,
        descripcion: descripcion,
        cantidad: cantidad,
        fecha: fecha,
     });

}

export default editarGasto;