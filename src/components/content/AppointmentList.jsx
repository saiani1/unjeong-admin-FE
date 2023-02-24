import React from 'react';
import classNames from 'classnames/bind';

import styles from '../../pages/appointmentManagement.module.scss';
import AppointmentItem from '../ui/AppointmentItem';

const cx = classNames.bind(styles);

function AppointmentList({ page, appointmentData }) {
  return (
    <>
      <ul className={cx('types')}>
        <li className={cx('standby')}>상담대기중</li>
        <li className={cx('completed')}>상담완료</li>
      </ul>
      <ul>
        {appointmentData &&
          appointmentData.map(appointment => (
            <AppointmentItem
              key={appointment.index}
              data={appointment}
              page={page}
            />
          ))}
      </ul>
    </>
  );
}

export default AppointmentList;
