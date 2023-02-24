import React, { useState } from 'react';

import AddVacation from '../components/content/AddVacation';
import VacationList from '../components/content/VacationList';

function VacationManagement() {
  const [vacationData, setVacationData] = useState();
  const [isChange, setIsChange] = useState(false);

  return (
    <>
      <AddVacation
        setVacationData={setVacationData}
        isChange={isChange}
        setIsChange={setIsChange}
      />
      <VacationList
        isChange={isChange}
        setIsChange={setIsChange}
        vacationData={vacationData}
        setVacationData={setVacationData}
      />
    </>
  );
}

export default VacationManagement;
