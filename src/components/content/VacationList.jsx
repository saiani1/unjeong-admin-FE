import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './vacationList.module.scss';
import CustomAlert from '../common/CustomAlert';
import VacationItem from '../ui/VacationItem';

const cx = classNames.bind(styles);

function VacationList({ setIsChange, vacationData }) {
  const [clickDate, setClickDate] = useState('');
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      {openAlert && (
        <CustomAlert
          page='vacation'
          status='cancel'
          title={clickDate}
          setOpenAlert={setOpenAlert}
          setIsChange={setIsChange}
        />
      )}
      <div className={cx('vacation-wrap')}>
        {vacationData && (
          <span className={cx('info')}>
            총 <strong>{vacationData.length}</strong>개의 휴가일이
            조회되었습니다.
          </span>
        )}
        <ul>
          {vacationData &&
            vacationData.length !== 0 &&
            vacationData.map(vacation => (
              <VacationItem
                key={`vacation-${vacation.index}`}
                data={vacation}
                setClickDate={setClickDate}
                setOpenAlert={setOpenAlert}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default VacationList;
