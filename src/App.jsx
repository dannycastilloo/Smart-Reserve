import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReserveScreen } from './routes/ReserveScreen';
import { StatsScreen } from './routes/StatsScreen';
import { HomeScreen } from './routes/HomeScreen';
import LoginScreen from './routes/LoginScreen';
import NavBar from './components/NavBar';
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
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home/*" element={user ? <ProtectedRoutes /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

const ProtectedRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/reserve" element={<ReserveScreen />} />
        <Route path="/stats" element={<StatsScreen />} />
      </Routes>
    </>
  );
};
