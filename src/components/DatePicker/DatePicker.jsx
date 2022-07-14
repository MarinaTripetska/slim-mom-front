import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { DatePickerWrapper } from './DatePicker.styled';
import CalendarBtn from '../CalendarBtn/CalendarBtn';

export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [isShow, setIsShow] = useState(false);

  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');

  let selectedDate = day + '.' + month + '.' + year;

  console.log('selectedDate:', selectedDate);

  let inputProps = {
    value: selectedDate,
    disabled: true,

    style: {
      border: 'none',
      fontSize: '34px',
      width: '230px',
    },
  };

  function valid(current) {
    let today = new Date();
    return current.isBefore(today);
  }
  function changeDate(evt) {
    setDate(evt._d);
  }

  function openCalendar() {
    setIsShow(!isShow);
  }

  return (
    <DatePickerWrapper>
      <Datetime
        inputProps={inputProps}
        timeFormat={false} // отключение отображения часов
        dateFormat="DD.MM.YYYY" // формат даты
        isValidDate={valid} // блокируем будущее
        onChange={changeDate} // отслеживаем изменения даты
        open={isShow} // отображение календаря
      />

      <CalendarBtn onHandleClick={openCalendar} />
    </DatePickerWrapper>
  );
}
