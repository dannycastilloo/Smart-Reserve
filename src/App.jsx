import React from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReserveScreen } from './routes/ReserveScreen';
import { StatsScreen } from './routes/StatsScreen';
import { ProfileScreen } from './routes/ProfileScreen';
import { HomeScreen } from './routes/HomeScreen';
import  LoginScreen   from './routes/LoginScreen';


export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/reserve" element={<ReserveScreen />} />
        <Route path="/stats" element={<StatsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
