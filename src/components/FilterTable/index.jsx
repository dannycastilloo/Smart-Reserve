import { useState, useEffect, useRef } from 'react'
import { RegisterButton } from '../RegisterButton'
import { ModalRegisterPc } from '../ModalRegisterPc'

import './index.scss'

export const FilterTable = () => {

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
                <form className="filter" role="search">
                    <input
                      type="search"
                      placeholder="Buscar por nombre, estado u otros"
                      aria-label="Search"
                    />
                </form>
                <RegisterButton onClick={openModal}/>
            </div>

            {isModalOpen && (
                <>
                    <div className="modal-background"></div>
                    <div className="modal-overlay">
                        <div className="modal-container" ref={modalRef}>
                            <ModalRegisterPc closeModal={closeModal} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}