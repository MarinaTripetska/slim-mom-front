import { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import { DatePickerWrapper, Image } from './DatePicker.styled';
import CalendarIcon from '../../icons/calendar-icon.svg';

export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [isShow, setIsShow] = useState(false);

  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  // console.log('year:', year);
  // console.log('month:', month);
  // console.log('day:', day);
  // let dateNowString = `${year}.${month}.${day}`;
  // let dateNowStringWithoutDots = year + month + day;
  let selectedDate = day + '.' + month + '.' + year;

  console.log('selectedDate:', selectedDate);

  let inputProps = {
    placeholder: {
      color: '#ff0000',
      opacity: 0.5,
    },
    placeholder: selectedDate,
    // value: { date },
    disabled: true,
    // onMouseLeave: () => alert('You went to the input but it was disabled'),
    // onClick: () => console.log('Click on Input'),
    style: {
      // color: 'blue',
      border: 'none',
      // borderColor: 'red',
      fontSize: '34px',
      width: '250px',
    },
    // onMouseDown: () => console.log('click'),
  };

  function valid(current) {
    let today = new Date();
    return current.isBefore(today);
  }
  const changeDate = evt => {
    // console.log('DATA INPUT:', evt._d);
    setDate(evt._d);
  };

  // let showCalendar = false;
  const openCalendar = () => {
    setIsShow(!isShow);
    // return (showCalendar = !showCalendar);
  };
  // console.log('showCalendar:', isShow);

  return (
    <DatePickerWrapper>
      <Datetime
        inputProps={inputProps}
        timeFormat={false} // отключение отображения часов
        dateFormat="DD.MM.YYYY" // формат даты
        // isValidDate={current => {
        //   let today = new Date();
        //   return current.isBefore(today);
        // }}
        isValidDate={valid} // блокируем будущее
        // input={false}
        onChange={changeDate} // отслеживаем изменения даты
        // renderInput={renderInput}
        open={isShow}
      />
      {/* <button>Btn</button> */}
      {/* <button onClick={openCalendar}> {isShow ? 'close' : 'open'}</button> */}
      <Image src={CalendarIcon} alt="Calendar" onClick={openCalendar} />
      {/* <button onClick={closeCalendar}> close calendar </button> */}
    </DatePickerWrapper>
  );
}
// return <Datetime />;
