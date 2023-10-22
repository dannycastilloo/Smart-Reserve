import React, { useState } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, push, set } from 'firebase/database';

export const PCModal = ({ closeModal }) => {
    const [codigo, setCodigo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [software, setSoftware] = useState('');

    const handleGuardarClick = () => {
        // Verifica que todos los campos estén completos
        if (codigo && marca && modelo && software) {
            // Crea un nuevo registro en la base de datos
            const computersRef = ref(db, 'Computers');
            const newComputerRef = push(computersRef);
    
            // Obtén la clave única generada por push y úsala como el ID
            const newComputerId = newComputerRef.key;
    
            // Define los datos para el nuevo registro, incluyendo el ID
            const newComputerData = {
                Id: newComputerId, // Asigna la clave como el ID
                Codigo: codigo,
                Brand: marca,
                Model: modelo,
                Software: software,
                Available: true, // Puedes establecer el estado inicial como desees
            };
    
            // Crea una referencia específica para el nuevo registro
            const specificComputerRef = ref(db, `Computers/${newComputerId}`);
    
            // Sube los datos a la base de datos
            set(specificComputerRef, newComputerData).then(() => {
                // Cierra el modal
                closeModal();
            }).catch((error) => {
                console.error('Error al guardar el equipo:', error);
            });
        } else {
            // Muestra un mensaje de error o realiza otra acción en caso de que los campos estén incompletos
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
