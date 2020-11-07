import React, { useState } from 'react'
import { format } from 'date-fns'
import { ko, jp, enUS } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { parseWithOptions } from 'date-fns/fp'

function DatePickerCalendarComponent() {
  const [date, setDate] = useState()

  DatePickerCalendarComponent.defaultProps = {
    viewDateType : 'yyyy MMM dd',
    locale : ko
  };

  return (
    <div>
      <p>
        Selected date: {date ? format(date, this.props.viewDateType, this.props.locale) : 'none'}.
      </p>
        <DatePickerCalendar date={date} onDateChange={setDate} locale={ko} />
    </div>
  )
}

export default DatePickerCalendarComponent