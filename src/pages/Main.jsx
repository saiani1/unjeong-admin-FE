import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './main.module.scss';
import Calendar from '../components/common/Calendar';
import Nav from '../components/common/Nav';

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx('wrap')}>
      <Nav />
      {/* <Title name='당월 일별 예약 여부 조회' /> */}
      <Calendar />
    </div>
  );
}

export default Main;
