import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const borrarGasto = async (id) => {
 await deleteDoc(doc(db, 'gastos', id))
  
}
