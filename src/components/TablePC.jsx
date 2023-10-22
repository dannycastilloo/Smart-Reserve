import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export const TablePC = () => {
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
                                <button className="cancelar" onClick={() => rejectReservation(reservation)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}