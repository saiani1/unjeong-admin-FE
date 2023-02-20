/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';

import styles from './calendar.module.scss';
import transformOneMonth from '../../util/transformOneMonth';
import { ArrowIcon } from '../../assets/svg/index';
import { getMonthAppointment } from '../../store/api/appointment';

const cx = classNames.bind(styles);

function Calendar() {
  const [dateArr, setDateArr] = useState([]);
  const [clickDate, setClickDate] = useState('');
  const [monthAppointment, setMonthAppointment] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const TODAY = dayjs().format('YYYY-MM-DD');
  const title = dayjs(TODAY).format('YYYY.MM');
  const titArr = title.split('.');
  const DAY_ARR = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);

  useEffect(() => {
    setIsFetching(false);

    setDateArr(transformOneMonth(TODAY));
    getMonthAppointment(TODAY, token)
      .then(res => {
        const newArr = res.data.data.map(({ index, date, ...rest }) => rest);
        setMonthAppointment(newArr);
      })
      .catch(err => console.log(err));

    setIsFetching(true);
  }, []);

  const dateBtnClickHandler = useCallback(
    e => {
      setClickDate(e.target.name);
      console.log(e.target.name);
    },
    [clickDate],
  );

  return (
    <div className={cx('wrap')}>
      <div className={cx('top-wrap')}>
        <button type='button' aria-label='이전 달'>
          <ArrowIcon className={cx('icon')} />
        </button>
        <h2>{title}</h2>
        <button type='button' aria-label='다음 달'>
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
                      { sunday: index === 0 },
                      { saturday: index === 6 },
                      { disable: date === 0 },
                    )}
                    onClick={dateBtnClickHandler}
                    name={`${titArr[0]}-${titArr[1]}-${date}`}
                  >
                    {date === 0 ? ' ' : date}
                    {date !== 0 &&
                      monthAppointment &&
                      monthAppointment[date - 1].existAppointment && (
                        <span className={cx('isAppointment')} />
                      )}
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
