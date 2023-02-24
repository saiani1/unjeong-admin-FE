import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './cancelAppointmentManagement.module.scss';
import Title from '../components/common/Title';
import AppointmentList from '../components/content/AppointmentList';
import { getRequireContactCustomer } from '../store/api/appointment';

const cx = classNames.bind(styles);

function CancelAppointmentManagement() {
  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);
  const [appointmentData, setAppointmentData] = useState();

  useEffect(() => {
    getRequireContactCustomer(token)
      .then(res => {
        setAppointmentData(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={cx('cancel-wrap')}>
      <Title
        name='예약취소 연락조회'
        content='예약일정 조정이 필요한 예약조회 페이지입니다.'
      />
      <div className={cx('cancel-list-wrap')}>
        <span className={cx('info')}>
          {appointmentData && appointmentData.length !== 0
            ? `총 ${appointmentData?.length}개의 예약이 조회되었습니다.`
            : '검색된 예약이 없습니다.'}
        </span>
        {appointmentData && appointmentData.length !== 0 && (
          <AppointmentList appointmentData={appointmentData} page='cancel' />
        )}
      </div>
    </div>
  );
}

export default CancelAppointmentManagement;
