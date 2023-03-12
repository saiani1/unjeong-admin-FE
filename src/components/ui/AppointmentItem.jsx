/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './appointmentItem.module.scss';
// import CustomAlert from '../common/CustomAlert';

const cx = classNames.bind(styles);

function AppointmentItem({ data }) {
  const state = data.appointmentState;
  const status =
    data.appointmentState === 'WAITING' ? '상담대기중' : '상담완료';
  const type = data.appointmentType === 'CALL' ? '전화상담' : '방문상담';

  return (
    <li className={cx('appointmentItem-wrap')}>
      <div className={cx('title', state)}>
        <span>{data.appointmentDate}</span>
        <span>{data.appointmentHour}:00</span>
      </div>
      <div className={cx('more')}>
        <ul>
          <li>
            <span>이름</span>
            <span>{data.name}</span>
          </li>
          <li>
            <span>연락처</span>
            <span>
              {data.phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
            </span>
          </li>
          <li>
            <span>예약상태</span>
            <span>{status}</span>
          </li>
          <li>
            <span>상담종류</span>
            <span>{type}</span>
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
