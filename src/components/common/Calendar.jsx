/* eslint-disable react/no-array-index-key */
import React, { useEffect, useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';

import styles from './calendar.module.scss';
import transformOneMonth from '../../util/transformOneMonth';
import { ArrowIcon } from '../../assets/svg/index';
import { getMonthAppointment } from '../../store/api/appointment';

const cx = classNames.bind(styles);
const TODAY = dayjs().format('YYYY-MM-DD');

function Calendar({
  page,
  clickDate,
  setClickDate,
  monthAppointment,
  setMonthAppointment,
  setOpenAlert,
}) {
  const [dateArr, setDateArr] = useState([]);
  const [changeMonth, setChangeMonth] = useState(TODAY);
  const [isFetching, setIsFetching] = useState(false);

  const title = dayjs(changeMonth).format('YYYY.MM');
  const titArr = title.split('.');
  const DAY_ARR = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);

  useEffect(() => {
    setIsFetching(false);

    setDateArr(transformOneMonth(changeMonth));
    if (page === 'appointment')
      getMonthAppointment(changeMonth, token)
        .then(res => {
          const newArr = res.data.data.map(({ index, date, ...rest }) => rest);
          setMonthAppointment(newArr);
        })
        .catch(err => console.log(err));
    setIsFetching(true);
  }, [changeMonth]);

  const changeMonthClickHandler = useCallback(
    e => {
      const btnName = e.target.name;
      if (btnName === 'prev')
        setChangeMonth(
          dayjs(changeMonth).add(-1, 'month').format('YYYY-MM-DD'),
        );
      else
        setChangeMonth(dayjs(changeMonth).add(1, 'month').format('YYYY-MM-DD'));
    },
    [changeMonth],
  );

  const todayBtnClickHandler = useCallback(() => {
    setChangeMonth(dayjs(TODAY).format('YYYY-MM-DD'));
  }, [changeMonth]);

  const dateBtnClickHandler = useCallback(
    e => {
      setClickDate(e.target.name);
      if (page === 'vacation') setOpenAlert(true);
    },
    [clickDate],
  );

  return (
    <div className={cx('wrap')}>
      <div className={cx('top-wrap')}>
        <button
          type='button'
          aria-label='이전 달'
          name='prev'
          onClick={changeMonthClickHandler}
        >
          <ArrowIcon className={cx('icon')} />
        </button>
        <div className={cx('tit-wrap')}>
          <h2>{title}</h2>
          <button
            type='button'
            className={cx('today-btn')}
            onClick={todayBtnClickHandler}
          >
            이번달
          </button>
        </div>
        <button
          type='button'
          aria-label='다음 달'
          name='next'
          onClick={changeMonthClickHandler}
        >
          <ArrowIcon className={cx('icon', 'right')} />
        </button>
      </div>
      <ul className={cx('day-wrap')}>
        {DAY_ARR.map((day, i) => (
          <li
            key={`day-${i}`}
            className={cx(
              'day',
              { sunday: day === 'SUN' },
              { saturday: day === 'SAT' },
            )}
          >
            {day}
          </li>
        ))}
      </ul>
      {isFetching && (
        <ul className={cx('dates-wrap')}>
          {dateArr.map((dates, i) => (
            <ul className={cx('week-wrap')} key={`dates-${i}`}>
              {dates.map((date, index) => (
                <li key={`date-${index}`}>
                  <button
                    type='button'
                    className={cx(
                      'date',
                      {
                        active:
                          date !== '00' &&
                          clickDate === `${titArr[0]}-${titArr[1]}-${date}`,
                      },
                      { sunday: index === 0 },
                      { saturday: index === 6 },
                      {
                        disable:
                          date === '00' ||
                          (page === 'appointment' &&
                            monthAppointment &&
                            !monthAppointment[date - 1].existAppointment),
                      },
                    )}
                    onClick={dateBtnClickHandler}
                    name={`${titArr[0]}-${titArr[1]}-${date}`}
                  >
                    {date === '00' ? ' ' : date}
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Calendar;
