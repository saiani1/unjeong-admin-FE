import React, { useCallback } from 'react';
import classNames from 'classnames/bind';
import toast from 'react-hot-toast';

import styles from './customAlert.module.scss';
import { addVacationDay, cancelVacationDay } from '../../store/api/vacation';

const cx = classNames.bind(styles);

function CustomAlert({ status, date, setOpenAlert, setIsChange }) {
  const rawToken = localStorage.getItem('token');
  const token = JSON.parse(rawToken);

  const btnClickHandler = useCallback(
    e => {
      const { name } = e.target;
      if (name === 'submit') {
        if (status === 'add') {
          addVacationDay(date, token)
            .then(() => {
              toast.success('휴가일 등록이 완료되었습니다.');
              setIsChange(true);
            })
            .catch(err => toast.error(err.response.data.errorMessage));
        } else {
          cancelVacationDay(date, token)
            .then(() => {
              toast.success('휴가일 취소가 완료되었습니다.');
              setIsChange(true);
            })
            .catch(err => toast.error(err.response.data.errorMessage));
        }
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
          <strong>{date} </strong>을
          <br /> {status === 'add' ? '휴가일로 등록' : '휴가취소'}
          하시겠습니까?
        </p>
        <div className={cx('btn-wrap')}>
          <button type='button' name='submit' onClick={btnClickHandler}>
            {status === 'add' ? '등록' : '휴가취소'}
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
