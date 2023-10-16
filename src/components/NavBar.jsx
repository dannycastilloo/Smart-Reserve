import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-expand-md">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbar-toggler">
                            <ul className="navbar-nav d-flex justify-content-center align-items-center">
                                <li className="nav-item">
                                    <div className="btn-menu">
                                        <label htmlFor="btn-menu">
                                            <img className="tecsup" src="../src/assets/tecsup.png" />
                                        </label>
                                    </div>
                                </li>
                                <button className="no-style-button">
                                    <li className="nav-item">
                                        <img className="user-icon" src="../src/assets/user.png" alt="User" />
                                    </li>
                                    <li className="nav-item">
                                        <span className="admin">Admin</span>
                                    </li>
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <input type="checkbox" id="btn-menu" />
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <NavLink to="/"><img className="nav-icon" src="../src/assets/pc.png" alt="Inicio" />Inicio</NavLink>
                        <NavLink to="/reserve"><img className="nav-icon" src="../src/assets/clock.png" alt="Reservas" />Reservas</NavLink>
                        <NavLink to="/stats"><img className="nav-icon" src="../src/assets/check-list.png" alt="Estadísticas" />Estadísticas</NavLink>
                        <NavLink to="/profile"><img className="nav-icon" src="../src/assets/profile.png" alt="Perfil" />Perfil</NavLink>
                        <NavLink to="/login"><img className="nav-icon" src="../src/assets/salida.png" alt="Salir" /> Cerrar Sesión</NavLink>
                    </nav>
                    <label htmlFor="btn-menu">✖️</label>
                </div>
            </div>
        </>
    )
}

export default NavBar;