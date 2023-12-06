import { useState, useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom"

import { ProfileModal } from '../ProfileModal'
import { ProfileButton } from "../ProfileButton"

import './index.scss'

export const Topbar = () => {

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
      <div className='topbar'>
        <NavLink to='/home'>
          <img className='nav-logo' src="../src/assets/tecsup.png" alt="TECSUP" />
        </NavLink>
        <ProfileButton onClick={openModal} />
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