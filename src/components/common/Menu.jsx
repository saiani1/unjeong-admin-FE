import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
  const [clickMenu, setClickMenu] = useState('예약조회');

  const menuClickHandler = useCallback(
    e => {
      setClickMenu(e.target.name);
    },
    [clickMenu],
  );

  return (
    <ul className={cx('wrap')}>
      <li>
        <Link
          to='/'
          className={cx(clickMenu === '예약조회' ? 'active' : '')}
          name='예약조회'
          onClick={menuClickHandler}
        >
          예약조회
        </Link>
      </li>
      <li>
        <Link
          to='cancelAppointmentManagement'
          className={cx(clickMenu === '연락조회' ? 'active' : '')}
          name='연락조회'
          onClick={menuClickHandler}
        >
          예약취소 연락조회
        </Link>
      </li>
      <li>
        <Link
          to='vacationManagement'
          className={cx(clickMenu === '휴가관리' ? 'active' : '')}
          name='휴가관리'
          onClick={menuClickHandler}
        >
          휴가관리
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
