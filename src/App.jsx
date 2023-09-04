import React from 'react'
import { NavBar } from './components/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ReserveScreen } from './routes/ReserveScreen'
import { StatsScreen } from './routes/StatsScreen'
import { ProfileScreen } from './routes/ProfileScreen'
import { HomeScreen } from './routes/HomeScreen'
import { LoginScreen } from './routes/LoginScreen'

export const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/reserve' element={<ReserveScreen />}></Route>
                <Route path='/stats' element={<StatsScreen />}></Route>
                <Route path='/profile' element={<ProfileScreen />}></Route>
                <Route path='/login' element={<LoginScreen />}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
            </Routes>
        </>
    )
}
