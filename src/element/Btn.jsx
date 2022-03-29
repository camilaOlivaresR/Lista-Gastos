import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { ReactComponent as Undo} from '../img/undo.svg'

const Btn = ({ruta = '/'}) => {
    const navigate = useNavigate();
  return (
    <button onClick={()=> navigate(ruta)}><Undo/></button>
  )
}

export default Btn;