import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './cancelAppointmentManagement.module.scss';
import Title from '../components/common/Title';
import { getRequireContactCustomer } from '../store/api/appointment';
import CancelCustomerList from '../components/content/CancelCustomerList';

const cx = classNames.bind(styles);

function CancelAppointmentManagement() {
  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);
  const [appointmentData, setAppointmentData] = useState();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    getRequireContactCustomer(token)
      .then(res => {
        setAppointmentData(res.data.data);
      })
      .catch(err => console.log(err));
  }, [isChange]);

  return (
    <div className={cx('cancel-wrap')}>
      <Title
        name='예약취소 연락조회'
        content='예약일정 조정이 필요한 예약조회 페이지입니다.'
      />
      <div className={cx('cancel-list-wrap')}>
        <span className={cx('info')}>
          {appointmentData && appointmentData.length !== 0
            ? `총 ${appointmentData?.length}명이 조회되었습니다.`
            : '검색된 예약이 없습니다.'}
        </span>
        {appointmentData &&
          appointmentData.length !== 0 &&
          appointmentData.map(item => (
            <CancelCustomerList
              key={`cancel-customer-${item.index}`}
              data={item}
              setIsChange={setIsChange}
            />
          ))}
      </div>
    </div>
  );
}

export default CancelAppointmentManagement;
