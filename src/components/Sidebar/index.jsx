import { NavLink, useNavigate } from "react-router-dom"
import { getAuth, signOut } from 'firebase/auth';

import './index.scss'

export const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <>
            <nav>
                <NavLink to='/home' className="nav-link">
                    <img src="/icons/inicio.svg" alt="Inicio" />
                    <span className='nav-span'>Inicio</span>
                </NavLink>

                <NavLink to='/reserve' className="nav-link">
                    <img src="/icons/pc.svg" alt="Clientes" />
                    <span className='nav-span'>Reservas</span>
                </NavLink>

                <NavLink to='/stats' className="nav-link">
                    <img src="/icons/stats.svg" alt="Préstamos" />
                    <span className='nav-span'>Estadísticas</span>
                </NavLink>

                <NavLink to='/store' className="nav-link">
                    <img src="/icons/store.svg" alt="Pagos" />
                    <span className='nav-span'>Almacén</span>
                </NavLink>
            </nav >
        </>
    )
}
