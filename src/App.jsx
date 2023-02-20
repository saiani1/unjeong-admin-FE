import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Login from './pages/Login';
import Main from './pages/Main';
import AppointmentManagement from './pages/AppointmentManagement';
import CancelAppointmentManagement from './pages/CancelAppointmentManagement';
import VacationManagement from './pages/VacationManagement';
import AuthContext from './store/auth-context';
import Header from './components/common/Header';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {authCtx.isLogin && <Header />}
      <Routes>
        <Route path='/' element={!authCtx.isLogin ? <Login /> : <Main />} />
        {!authCtx.isLogin && (
          <>
            <Route
              path='appointmentManagement'
              element={<AppointmentManagement />}
            />
            <Route
              path='cancelAppointmentManagement'
              element={<CancelAppointmentManagement />}
            />
            <Route path='vacationManagement' element={<VacationManagement />} />
          </>
        )}
      </Routes>
      <Toaster
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;
