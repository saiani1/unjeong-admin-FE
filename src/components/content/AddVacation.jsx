import React, { useState } from 'react';

import Title from '../common/Title';
import Calendar from '../common/Calendar';
import CustomAlert from '../common/CustomAlert';

function AddVacation({ setIsChange }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [clickDate, setClickDate] = useState('');

  return (
    <>
      {openAlert && (
        <CustomAlert
          status='add'
          date={clickDate}
          setOpenAlert={setOpenAlert}
          setIsChange={setIsChange}
        />
      )}
      <Title name='휴가 관리' />
      <Calendar
        page='vacation'
        clickDate={clickDate}
        setClickDate={setClickDate}
        setOpenAlert={setOpenAlert}
      />
    </>
  );
}

export default AddVacation;
