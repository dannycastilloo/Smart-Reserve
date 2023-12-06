import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReserveScreen } from './screens/ReserveScreen';
import { StatsScreen } from './screens/StatsScreen';
import { HomeScreen } from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { StoreScreen } from './screens/StoreScreen';

import { MayShowNavBar } from './components/MayShowNavBar';
import { Topbar } from './components/Topbar'
import { Sidebar } from './components/Sidebar'

import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
        <Topbar />
        <Sidebar />
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
