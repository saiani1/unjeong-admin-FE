import React from 'react';
import classNames from 'classnames/bind';
import styles from './cancelAppointmentManagement.module.scss';
import Title from '../components/common/Title';

const cx = classNames.bind(styles);

function CancelAppointmentManagement() {
  return (
    <div className={cx('wrap')}>
      <Title
        name='예약취소 연락조회'
        content='예약일정 조정이 필요한 예약조회 페이지입니다.'
      />
    </div>
  );
}

export default CancelAppointmentManagement;
