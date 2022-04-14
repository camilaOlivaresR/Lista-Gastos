import {ReactComponent as Comida} from '../img/bbq.svg'
import {ReactComponent as Salud} from '../img/healthcare.svg'
import {ReactComponent as Cuentas} from '../img/light-bulb-on.svg'
import {ReactComponent as Transporte} from '../img/cycling.svg'
import {ReactComponent as Ropa} from '../img/pants.svg'
import {ReactComponent as Diversion} from '../img/yoga.svg'
import {ReactComponent as Ahorros} from '../img/logo.svg'
import {ReactComponent as Hogar} from '../img/home.svg'

const IconosCategoria = ({id}) => {
  switch(id){
      case 'Comida':
          return <Comida/>;
          case 'Salud':
          return <Salud/>;
          case 'Cuentas':
          return <Cuentas/>;
          case 'Transporte':
          return <Transporte/>;
          case 'Ropa':
          return <Ropa/>;
          case 'Diversion':
          return <Diversion/>;
          case 'Ahorro':
          return <Ahorros/>;
          case 'Hogar':
          return <Hogar/>;
          default:
          break;
  }
  
}

export default IconosCategoria