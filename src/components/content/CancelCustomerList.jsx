import React, { useCallback, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './cancelCustomerList.module.scss';
import CustomAlert from '../common/CustomAlert';

const cx = classNames.bind(styles);

function CancelCustomerList({ data, setIsChange }) {
  const [openAlert, setOpenAlert] = useState(false);

  const contactBtnClickHandler = useCallback(() => {
    setOpenAlert(true);
  }, [openAlert]);

  return (
    <li className={cx('cancelCustomerList-wrap')}>
      {openAlert && (
        <CustomAlert
          page='cancel'
          title={data}
          setOpenAlert={setOpenAlert}
          setIsChange={setIsChange}
        />
      )}
      <div className={cx('title')}>
        <span>{data.name} 님</span>
        <span>
          {data.phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
        </span>
      </div>
      <div className={cx('more')}>
        <ul>
          {data.appointmentList.map(appointment => (
            <li key={`cancel-${appointment.index}`}>
              <span className={cx('appointment-date')}>
                {appointment.appointmentDate}
              </span>
              <span className={cx('appointment-time')}>
                {appointment.appointmentHour}:00
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type='button'
        className={cx(
          'contact-btn',
          data.appointmentList[0].isRescheduled ? 'done' : '',
        )}
        onClick={contactBtnClickHandler}
        disabled={data.appointmentList[0].isRescheduled}
      >
        {data.appointmentList[0].isRescheduled
          ? '예약조정 완료'
          : '예약조정 완료하기'}
      </button>
    </li>
  );
}

export default CancelCustomerList;
