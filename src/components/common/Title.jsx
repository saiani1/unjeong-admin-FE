import React from 'react';
import classNames from 'classnames/bind';

import styles from './title.module.scss';

const cx = classNames.bind(styles);

function Title({ name }) {
  return (
    <div className={cx('wrap')}>
      <h1>🗓️ {name}</h1>
    </div>
  );
}

export default Title;
