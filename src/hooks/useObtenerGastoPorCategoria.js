
import { useEffect, useState } from "react";
import useObtenerGastoDelMes from "./useObtenerGastosDelMes";





const useObtenerGastoCategoria = () => {
    const [gastoPorCategoria, cambiarGastoPorCategoria] = useState([]);
    const gastos = useObtenerGastoDelMes();

    useEffect(() => {

        const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {
            const categoriaActual = objetoActual.categoria;
            const cantidadActual = objetoActual.cantidad;
    
            objetoResultante[categoriaActual] += cantidadActual;
    
        
            return objetoResultante;
           
        }, {
            'Comida': 0,
            'Cuentas ': 0,
            'Hogar': 0,
            'Transporte': 0,
            'Ropa': 0,
            'Salud ': 0,
            'Ahorro': 0,
            'Diversion': 0,
    
        });
    
        // console.log(sumaDeGastos)
    
        cambiarGastoPorCategoria(Object.keys(sumaDeGastos).map((elemento) => {
            return{categoria: elemento, cantidad: sumaDeGastos[elemento]}
        }))
    
    }, [cambiarGastoPorCategoria, gastos])

    return gastoPorCategoria;

};

export default useObtenerGastoCategoria;

