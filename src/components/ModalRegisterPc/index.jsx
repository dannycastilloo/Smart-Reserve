import React, { useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { ref, push, set } from 'firebase/database';

export const ModalRegisterPc = ({ closeModal }) => {
    const [codigo, setCodigo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [software, setSoftware] = useState('');

    const handleGuardarClick = () => {
        if (codigo && marca && modelo && software) {
            const computersRef = ref(db, 'Computers');
            const newComputerRef = push(computersRef);
    
            const newComputerId = newComputerRef.key;
    
            const newComputerData = {
                Id: newComputerId,
                Codigo: codigo,
                Brand: marca,
                Model: modelo,
                Software: software,
                Available: true,
            };
    
            const specificComputerRef = ref(db, `Computers/${newComputerId}`);
    
            set(specificComputerRef, newComputerData).then(() => {
                closeModal();
            }).catch((error) => {
                console.error('Error al guardar el equipo:', error);
            });
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };    
    

    return (
        <>
            <div className="project-modal">
                <h1 className="title">Agregar Computadora</h1>

                <label>Código</label>
                <input
                    className="project-name"
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="LAB1502-04"
                />

                <label>Marca</label>
                <input
                    className="project-name"
                    type="text"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    placeholder="HP"
                />

                <label>Modelo</label>
                <input
                    className="project-name"
                    type="text"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    placeholder="ThinkCentre"
                />

                <label>Software Instalados</label>
                <input
                    className="project-name"
                    type="text"
                    value={software}
                    onChange={(e) => setSoftware(e.target.value)}
                    placeholder="Xamarin"
                />

                <div>
                    <button className="button-filled" onClick={handleGuardarClick}>
                        Guardar
                    </button>
                    <button className="button-outline" onClick={closeModal}>
                        Cancelar
                    </button>
                </div>
            </div>
        </>
    );
};
