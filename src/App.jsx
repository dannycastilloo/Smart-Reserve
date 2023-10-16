import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReserveScreen } from './routes/ReserveScreen';
import { StatsScreen } from './routes/StatsScreen';
import { ProfileScreen } from './routes/ProfileScreen';
import { HomeScreen } from './routes/HomeScreen';
import LoginScreen from './routes/LoginScreen';
import NavBar from './components/NavBar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/reserve" element={<ReserveScreen />} />
        <Route path="/stats" element={<StatsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home/*" element={<ProtectedRoutes />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

const ProtectedRoutes = () => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};