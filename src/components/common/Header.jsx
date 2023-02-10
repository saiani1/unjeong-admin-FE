import React from 'react';
import classNames from 'classnames/bind';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrap')}>
      <h1>
        <span>운정사주타로 관리자 페이지</span>
      </h1>
    </div>
  );
}

export default Header;
