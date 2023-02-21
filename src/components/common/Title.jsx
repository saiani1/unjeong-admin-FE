import React from 'react';
import classNames from 'classnames/bind';

import styles from './title.module.scss';

const cx = classNames.bind(styles);

function Title({ name, content }) {
  return (
    <div className={cx('tit-wrap')}>
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Title;
