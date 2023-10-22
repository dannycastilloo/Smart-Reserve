import { NavLink } from "react-router-dom"
import { ButtonProfile } from "./ButtonProfile"
import { useState, useRef, useEffect } from "react"
import { ProfileModal } from "../components/ProfileModal"

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

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
                                            <img className="tecsup" src="../src/assets/tecsup.png" alt="logo tecsup"/>
                                        </label>
                                    </div>
                                </li>

                                <ButtonProfile onClick={openModal} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <input type="checkbox" id="btn-menu" />
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <NavLink to="/home"><img className="nav-icon" src="../src/assets/inicio.svg" alt="Inicio" />Inicio</NavLink>
                        <NavLink to="/reserve"><img className="nav-icon" src="../src/assets/pc.svg" alt="Reservas" />Reservas</NavLink>
                        <NavLink to="/stats"><img className="nav-icon" src="../src/assets/stats.svg" alt="Estadísticas" />Estadísticas</NavLink>
                        <NavLink to="/store"><img className="nav-icon" src="../src/assets/store.svg" alt="Almacén" />Almacén</NavLink>
                        <NavLink to="/login"><img className="nav-icon" src="../src/assets/logout.svg" alt="Salir" /> Cerrar Sesión</NavLink>
                    </nav>
                    <label htmlFor="btn-menu">✖️</label>
                </div>
            </div>

            {isModalOpen && (
                <>
                    <div className="modal-background"></div>
                    <div className="modal-overlay">
                        <div className="modal-container" ref={modalRef}>
                            <ProfileModal closeModal={closeModal} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default NavBar;