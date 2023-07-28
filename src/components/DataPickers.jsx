
import React, { useState, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { formatDate } from '../actions/functions'
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
const DataPickers = ({ dateF, refDate }) => {
  const [startDate, setStartDate] = useState(new Date(refDate));
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="btn btn-primary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        let format = formatDate(date)
        dateF(format)
        setStartDate(date)
      }}
      locale="es"
      customInput={<ExampleCustomInput />}
      dateFormat={'yyyy-MM-dd'}
    />
  )
}
export default DataPickers