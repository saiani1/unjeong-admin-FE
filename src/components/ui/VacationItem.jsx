import React, { useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from '../content/vacationList.module.scss';

const cx = classNames.bind(styles);

function VacationItem({ data, setClickDate, setOpenAlert }) {
  const cancelVacationBtnClickHandler = useCallback(
    e => {
      setClickDate(e.target.name);
      setOpenAlert(true);
    },
    [setClickDate, setOpenAlert],
  );

  return (
    <li className={cx('vacation-item-wrap')}>
      <span>{data.vacationDate}</span>
      <button
        type='button'
        name={data.vacationDate}
        onClick={cancelVacationBtnClickHandler}
      >
        휴가 취소
      </button>
    </li>
  );
}

export default VacationItem;
