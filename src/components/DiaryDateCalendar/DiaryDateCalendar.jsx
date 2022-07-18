import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/uk';
import 'moment/locale/ru';
import { DatePickerWrapper, DatePicker } from './DiaryDateCalendar.styled';
import CalendarBtn from '../CalendarBtn/CalendarBtn';
import { diarySelectors, updateDate } from 'redux/app/diaryPerDay';
import { diaryPerDayOperation } from 'redux/app/diaryPerDay';

function dateToString(date) {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  return day + '.' + month + '.' + year;
}

export default function DiaryDateCalendar() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const currentDate = useSelector(diarySelectors.getCurrentDate);
  const [date, setDate] = useState(currentDate);

  let inputProps = {
    value: date,
    disabled: true, // блокирует поле ввода для редактирования чисел (клик по нему не открывает календарь)
  };

  function valid(current) {
    let today = new Date();
    return current.isBefore(today);
  }

  function changeDate(evt) {
    const dateString = dateToString(evt._d);
    setDate(dateString);
    dispatch(diaryPerDayOperation.actionGetProducts({ date: dateString }));
    dispatch(updateDate(dateString));
  }

  function openCalendar() {
    setIsShow(!isShow);
  }

  return (
    <DatePickerWrapper>
      <DatePicker
        inputProps={inputProps} // настройки
        timeFormat={false} // отключение отображения часов
        dateFormat="DD.MM.YYYY" // формат даты
        isValidDate={valid} // блокируем будущее
        onChange={changeDate} // отслеживаем изменения даты
        open={isShow} // отображение календаря !!!
        locale="uk" // язык
      />

      <CalendarBtn onHandleClick={openCalendar} isShown={isShow} />
    </DatePickerWrapper>
  );
}
