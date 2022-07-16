import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dateAction } from '../../redux/app/date/dateSlice';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { DatePickerWrapper } from './DiaryDateCalendar.styled';
import CalendarBtn from '../CalendarBtn/CalendarBtn';

function dateToString(date) {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');

  return day + '.' + month + '.' + year;
}

export default function DiaryDateCalendar() {
  const [date, setDate] = useState(dateToString(new Date()));
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();
  dispatch(dateAction(date));

  let inputProps = {
    value: date,
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
    setDate(dateToString(evt._d));
  }

  function openCalendar() {
    setIsShow(!isShow);
  }

  return (
    <DatePickerWrapper>
      <Datetime
        inputProps={inputProps} // настройки
        timeFormat={false} // отключение отображения часов
        dateFormat="DD.MM.YYYY" // формат даты
        isValidDate={valid} // блокируем будущее
        onChange={changeDate} // отслеживаем изменения даты
        open={isShow} // отображение календаря !!!
      />

      <CalendarBtn onHandleClick={openCalendar} />
    </DatePickerWrapper>
  );
}
