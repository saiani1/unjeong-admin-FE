/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './appointmentManagement.module.scss';
import Calendar from '../components/common/Calendar';
import AppointmentItem from '../components/ui/AppointmentItem';

const cx = classNames.bind(styles);

function AppointmentManagement() {
  const [dateAppointment, setDateAppointment] = useState();

  console.log(dateAppointment);
  return (
    <div className={cx('wrap')}>
      <div className={cx('tit-wrap')}>
        <h2>월별 예약현황</h2>
        <p>날짜를 누르시면 날짜별 예약조회가 가능합니다.</p>
      </div>
      <Calendar setDateAppointment={setDateAppointment} />
      {dateAppointment && (
        <div className={cx('appointment-status-wrap')}>
          <span className={cx('appointment-info')}>
            총 <strong>{dateAppointment.length}</strong>건 조회되었습니다.
          </span>
          <ul className={cx('types')}>
            <li className={cx('standby')}>상담대기중</li>
            <li className={cx('completed')}>상담완료</li>
          </ul>
        </div>
      )}
      {dateAppointment &&
        dateAppointment.map((data, i) => (
          <AppointmentItem key={`appointment-${i}`} data={data} />
        ))}
    </div>
  );
}

export default AppointmentManagement;
