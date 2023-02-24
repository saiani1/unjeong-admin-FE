import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './app.css';
import Login from './pages/Login';
import AppointmentManagement from './pages/AppointmentManagement';
import CancelAppointmentManagement from './pages/CancelAppointmentManagement';
import VacationManagement from './pages/VacationManagement';
import AuthContext from './store/auth-context';
import Header from './components/common/Header';
import Menu from './components/common/Menu';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className='wrap'>
      {authCtx.isLogin && <Header />}
      <Routes>
        <Route
          path='/'
          element={!authCtx.isLogin ? <Login /> : <AppointmentManagement />}
        />
        {authCtx.isLogin && (
          <>
            <Route
              path='cancelAppointmentManagement'
              element={<CancelAppointmentManagement />}
            />
            <Route path='vacationManagement' element={<VacationManagement />} />
          </>
        )}
      </Routes>
      {authCtx.isLogin && <Menu />}
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
