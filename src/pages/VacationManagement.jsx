import React, { useState, useEffect } from 'react';

import Title from '../components/common/Title';
import VacationCalendar from '../components/ui/VacationCalendar';
import VacationList from '../components/content/VacationList';
import { getVacationDays } from '../store/api/vacation';

function VacationManagement() {
  const [vacationData, setVacationData] = useState();
  const [isChange, setIsChange] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [clickDate, setClickDate] = useState('');

  useEffect(() => {
    getVacationDays()
      .then(res => {
        setVacationData(res.data.data);
        setIsChange(false);
      })
      .catch(err => console.error(err));
  }, [isChange]);

  return (
    <>
      <Title name='휴가 관리' />
      <VacationCalendar
        vacationData={vacationData}
        clickDate={clickDate}
        setClickDate={setClickDate}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        setIsChange={setIsChange}
      />
      {vacationData && vacationData.length !== 0 && (
        <VacationList
          isChange={isChange}
          setIsChange={setIsChange}
          vacationData={vacationData}
          setVacationData={setVacationData}
        />
      )}
    </>
  );
}

export default VacationManagement;
