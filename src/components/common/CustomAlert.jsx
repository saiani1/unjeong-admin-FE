import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import toast from 'react-hot-toast';

import styles from './customAlert.module.scss';
import { addVacationDay, cancelVacationDay } from '../../store/api/vacation';
import { rescheduledCustomer } from '../../store/api/appointment';

const cx = classNames.bind(styles);

function CustomAlert({ page, status, title, setOpenAlert, setIsChange }) {
  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);
  const appointmentCode =
    page === 'cancel' ? title.appointmentList[0].appointmentCode : '';
  const alertTitle = page === 'vacation' ? title : title.name;
  const cancelPageContent = '취소연락 하셨습니까?';
  const vacationPageContent =
    status === 'add' ? '휴가일로 등록 하시겠습니까?' : '휴가취소 하시겠습니까?';
  const cancelSubmitContent = '연락완료';
  const vacationSubmitContent = status === 'add' ? '등록' : '휴가취소';

  const btnClickHandler = useCallback(
    e => {
      const { name } = e.target;
      if (page === 'vacation' && name === 'submit') {
        if (status === 'add') {
          addVacationDay(title, token)
            .then(() => {
              toast.success('휴가일 등록이 완료되었습니다.');
              setIsChange(true);
            })
            .catch(err => toast.error(err.response.data.errorMessage));
        } else {
          cancelVacationDay(title, token)
            .then(() => {
              toast.success('휴가일 취소가 완료되었습니다.');
              setIsChange(true);
            })
            .catch(err => toast.error(err.response.data.errorMessage));
        }
      } else if (page === 'cancel' && name === 'submit') {
        rescheduledCustomer(appointmentCode, token)
          .then(res => {
            console.log(res);
            toast.success('해당 예약이 조정완료 처리되었습니다.');
            setIsChange(true);
          })
          .catch(err => console.log(err));
      }
      setOpenAlert(false);
    },
    [setOpenAlert, setIsChange],
  );

  return (
    <>
      <div className={cx('back')} />
      <div className={cx('alert-wrap')}>
        <p>
          <strong>{alertTitle} </strong>
          {page === 'vacation' ? '을' : '님께'}
          <br /> {page === 'vacation' ? vacationPageContent : cancelPageContent}
        </p>
        <div className={cx('btn-wrap')}>
          <button type='button' name='submit' onClick={btnClickHandler}>
            {page === 'vacation' ? vacationSubmitContent : cancelSubmitContent}
          </button>
          <button type='button' name='cancel' onClick={btnClickHandler}>
            취소
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomAlert;
