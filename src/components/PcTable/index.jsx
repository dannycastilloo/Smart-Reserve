import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig';
import { remove, ref, onValue } from 'firebase/database';

export const PcTable = () => {
    const [computers, setComputers] = useState({});

    useEffect(() => {
        const computersRef = ref(db, 'Computers');

        onValue(computersRef, (snapshot) => {
            const computersData = snapshot.val();
            if (computersData) {
                setComputers(computersData);
            }
        });
    }, []);

    const deleteComputer = (computerId) => {
        const computersRef = ref(db, `Computers/${computerId}`);

        remove(computersRef)
            .then(() => {
                console.log('Computadora eliminada correctamente.');
            })
            .catch((error) => {
                console.error('Error al eliminar la computadora:', error);
            });
    };


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> <span className="table-head">Código</span> </th>
                        <th scope="col"><span className="table-head">Software</span></th>
                        <th scope="col"><span className="table-head">Marca</span></th>
                        <th scope="col"><span className="table-head">Modelo</span></th>
                        <th scope="col"><span className="table-head">Acción</span></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(computers).map((computer) => (
                        <tr key={computer.Id}>
                            <td className="table-content">{computer.Codigo}</td>
                            <td className="table-content">{computer.Software}</td>
                            <td className="table-content">{computer.Brand}</td>
                            <td className="table-content">{computer.Model}</td>
                            <td className="actions-container">
                                <button className="cancelar" onClick={() => deleteComputer(computer.Id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}