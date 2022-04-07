import { useState } from "react"
import{ReactComponent as Down} from '../img/down.svg'
import IconosCategoria from "../element/IconosCategoria";

const SelectCategorias = ({categoria, cambiarCategoria}) => {
    const [mostrarSelect , cambiarMostrarSelect] = useState(false);
    
    const categorias = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas', texto: 'Cuentas'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud', texto: 'Salud'},
        {id: 'ahorro', texto: 'Ahorro'},
        {id: 'diversion', texto: 'Diversion'},
    ]

const handleClick = (e) =>{
    cambiarCategoria(e.currentTarget.dataset.valor);
}

  return (
      <div onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
             <div>{categoria} <Down/></div>
             {mostrarSelect &&
             <div>
              {categorias.map((categoria) => {
                 return <div 
                 key={categoria.id}
                 data-valor={categoria.texto}
                 onClick={handleClick}
                 >
                     <IconosCategoria id={categoria.id}/>
                     {categoria.id}
                     </div>
              })}
             </div>
             }
      </div>
 
  
  )
}

export default SelectCategorias