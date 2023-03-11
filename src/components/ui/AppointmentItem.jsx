/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './appointmentItem.module.scss';
import CustomAlert from '../common/CustomAlert';

const cx = classNames.bind(styles);

function AppointmentItem({ page, data, setIsChange }) {
  const [openAlert, setOpenAlert] = useState(false);
  const state =
    page === 'view'
      ? data.appointmentState
      : data.appointmentList[0].appointmentState;
  const date =
    page === 'view'
      ? data.appointmentDate
      : data.appointmentList[0].appointmentDate;
  const hour =
    page === 'view'
      ? data.appointmentHour
      : data.appointmentList[0].appointmentHour;
  const status =
    page === 'view'
      ? data.appointmentState === 'WAITING'
        ? '상담대기중'
        : '상담완료'
      : data.appointmentList[0].appointmentState === 'WAITING'
      ? '상담대기중'
      : '상담완료';
  const type =
    page === 'view'
      ? data.appointmentType === 'CALL'
        ? '전화상담'
        : '방문상담'
      : data.appointmentList[0].appointmentType === 'CALL'
      ? '전화상담'
      : '방문상담';
  const people =
    page === 'view'
      ? data.numberOfPeople
      : data.appointmentList[0].numberOfPeople;
  const isRecheduled =
    page === 'cancel' ? data.appointmentList[0].isRescheduled : '';

  const contactBtnClickHandler = useCallback(() => {
    setOpenAlert(true);
  }, [openAlert]);

  return (
    <li className={cx('appointmentItem-wrap')}>
      {openAlert && (
        <CustomAlert
          page='cancel'
          title={data}
          setOpenAlert={setOpenAlert}
          setIsChange={setIsChange}
        />
      )}
      <div className={cx('title', state)}>
        <span>{date}</span>
        <span>{hour}</span>
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
            <span>{people}명</span>
          </li>
        </ul>
      </div>
      {page === 'cancel' && (
        <button
          type='button'
          className={cx('contact-btn', isRecheduled ? 'done' : '')}
          onClick={contactBtnClickHandler}
          disabled={isRecheduled}
        >
          {isRecheduled ? '예약조정 완료' : '예약조정 완료하기'}
        </button>
      )}
    </li>
  );
}

export default AppointmentItem;
