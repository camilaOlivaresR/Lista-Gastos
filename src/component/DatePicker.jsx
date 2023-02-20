import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import {es} from 'date-fns/locale';

function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format ) {
  return dateFnsFormat(date, format, { locale: es });
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dias = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

const DatePicker = ({fecha, cambiarFecha}) => {
  return (
    <div>
      <DayPickerInput 
      value={fecha}
      onDayChange={(day) => cambiarFecha(day)}
      format="dd 'de' MMMM 'de' yyyy"
      formatDate={formatDate}
      parseDate={parseDate}
      
      dayPickerProps={
        {
          months: meses ,
          weekdaysShort: dias
        }
      }

      />
    </div>

  )
}

export default DatePicker