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
      case 'comida':
          return <Comida/>;
          case 'salud':
          return <Salud/>;
          case 'cuentas':
          return <Cuentas/>;
          case 'transporte':
          return <Transporte/>;
          case 'ropa':
          return <Ropa/>;
          case 'diversion':
          return <Diversion/>;
          case 'ahorro':
          return <Ahorros/>;
          case 'hogar':
          return <Hogar/>;
          default:
          break;
  }
}

export default IconosCategoria