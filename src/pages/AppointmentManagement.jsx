/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './appointmentManagement.module.scss';
import Calendar from '../components/common/Calendar';
import Title from '../components/common/Title';
import AppointmentList from '../components/content/AppointmentList';
import { getThisDayAppointment } from '../store/api/appointment';

const cx = classNames.bind(styles);

function AppointmentManagement() {
  const [clickDate, setClickDate] = useState('');
  const [dateAppointment, setDateAppointment] = useState();
  const [monthAppointment, setMonthAppointment] = useState();

  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);

  useEffect(() => {
    if (clickDate) {
      getThisDayAppointment(clickDate, token)
        .then(res => setDateAppointment(res.data.data))
        .catch(err => console.log(err));
    }
  }, [clickDate]);

  return (
    <div className={cx('wrap')}>
      <Title
        name='월별 예약현황'
        content='날짜를 누르시면 날짜별 예약조회를 합니다.'
      />
      <Calendar
        page='appointment'
        clickDate={clickDate}
        setClickDate={setClickDate}
        monthAppointment={monthAppointment}
        setMonthAppointment={setMonthAppointment}
      />
      {dateAppointment && (
        <>
          <div className={cx('appointment-status-wrap')}>
            <span className={cx('appointment-info')}>
              총 <strong>{dateAppointment.length}</strong>건 조회되었습니다.
            </span>
          </div>
          <AppointmentList appointmentData={dateAppointment} page='view' />
        </>
      )}
    </div>
  );
}

export default AppointmentManagement;
