import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReserveScreen } from './routes/ReserveScreen';
import { StatsScreen } from './routes/StatsScreen';
import { HomeScreen } from './routes/HomeScreen';
import LoginScreen from './routes/LoginScreen';
import { MayShowNavBar } from './components/MayShowNavBar';
import NavBar from './components/NavBar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { StoreScreen } from './routes/StoreScreen';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <MayShowNavBar>
        <NavBar />
      </MayShowNavBar>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/reserve" element={<ReserveScreen />} />
        <Route path="/stats" element={<StatsScreen />} />
        <Route path="/store" element={<StoreScreen />} />
      </Routes>
    </>
  );
};
