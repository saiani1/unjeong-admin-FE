/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './appointmentItem.module.scss';

const cx = classNames.bind(styles);

function AppointmentItem({ data }) {
  const state = data.appointmentState;

  return (
    <li className={cx('appointmentItem-wrap')}>
      <div className={cx('title', state)}>
        <span>{data.appointmentDate}</span>
        <span>{data.appointmentHour}</span>
      </div>
      <div className={cx('more')}>
        <ul>
          <li>
            <span>이름</span>
            <span>{data.name}</span>
          </li>
          <li>
            <span>연락처</span>
            <span>{data.phone}</span>
          </li>
          <li>
            <span>예약상태</span>
            <span>
              {data.appointmentState === 'WAITING' && '상담대기중'}
              {data.appointmentState === 'CANCELED' && '예약취소됨'}
              {data.appointmentState === 'DONE' && '상담완료'}
            </span>
          </li>
          <li>
            <span>상담종류</span>
            <span>
              {data.appointmentType === 'CALL' ? '전화상담' : '방문상담'}
            </span>
          </li>
          <li>
            <span>인원</span>
            <span>{data.numberOfPeople}명</span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default AppointmentItem;
