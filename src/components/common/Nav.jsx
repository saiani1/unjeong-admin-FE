import React from 'react';
import classNames from 'classnames/bind';
import styles from './nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
  return (
    <div className={cx('wrap')}>
      <button type='button'>당월 일별 예약 여부 조회</button>
      <button type='button'>당일 예약 여부 조회</button>
    </div>
  );
}

export default Nav;
