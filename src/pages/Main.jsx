import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './main.module.scss';

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx('wrap')}>
      <Link to='appointmentManagement'>예약조회</Link>
      <Link to='cancelAppointmentManagement'>예약취소 연락조회</Link>
      <Link to='vacationManagement'>휴가관리</Link>
    </div>
  );
}

export default Main;
