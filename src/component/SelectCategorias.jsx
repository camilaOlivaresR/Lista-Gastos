import { useState } from "react"
import{ReactComponent as Down} from '../img/down.svg'
import IconosCategoria from "../element/IconosCategoria";

const SelectCategorias = ({categoria, cambiarCategoria}) => {
    const [mostrarSelect , cambiarMostrarSelect] = useState(false);
    
    const categorias = [
        {id: 'Comida', texto: 'Comida'},
        {id: 'Cuentas', texto: 'Cuentas'},
        {id: 'Hogar', texto: 'Hogar'},
        {id: 'Transporte', texto: 'Transporte'},
        {id: 'Ropa', texto: 'Ropa'},
        {id: 'Salud', texto: 'Salud'},
        {id: 'Ahorro', texto: 'Ahorro'},
        {id: 'Diversion', texto: 'Diversion'},
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
                     <IconosCategoria id={categoria.texto}/>
                     {categoria.texto}
                     </div>
              })}
             </div>
             }
      </div>
 
  
  )
}

export default SelectCategorias