import React,  { useContext, useEffect, useState }  from "react";
import useObtenerGastoDelMes from "../hooks/useObtenerGastosDelMes";



const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({children}) => {

    const [total, cambiarTotal] = useState();
    const gastos = useObtenerGastoDelMes();

    useEffect(() => {
        let sumaMes = 0;
        gastos.forEach((gasto) => {
            sumaMes = sumaMes + gasto.cantidad
            console.log(typeof gasto.cantidad)
        })
        
        
        console.log(sumaMes)
        
        cambiarTotal(sumaMes);
    }, [gastos]);

    return(
        <TotalGastadoContext.Provider value={{total: total}}>
            {children}
        </TotalGastadoContext.Provider>

    );

}
export {TotalGastadoProvider, useTotalDelMes}