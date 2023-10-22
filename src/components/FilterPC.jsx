import { useState, useEffect, useRef } from "react"
import { PCModal } from "./PCModal"

export const FilterPC = () => {
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
            <div className="filter-table">
                <form className="d-flex filter-pc" role="search">

                    <input className="form-control me-2" type="search" placeholder="Buscar por marca, modelo u otros" aria-label="Search"></input>
                </form>
                <button className="filtros"> <img src="../src/assets/Filter.svg" alt="Filtros" />Filtros</button>
                <button className="registrar" onClick={openModal}>Registrar</button>
            </div>

            {isModalOpen && (
                <>
                    <div className="modal-background"></div>
                    <div className="modal-overlay">
                        <div className="modal-container" ref={modalRef}>
                            <PCModal closeModal={closeModal} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
