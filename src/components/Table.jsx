import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export const Table = () => {
    const [reservations, setReservations] = useState([]);
    const [computers, setComputers] = useState({});
    const [users, setUsers] = useState({});

    useEffect(() => {
        const reservationsRef = ref(db, 'Reserves');
        const computersRef = ref(db, 'Computers');
        const usersRef = ref(db, 'Users');

        onValue(computersRef, (snapshot) => {
            const computersData = snapshot.val();
            if (computersData) {
                setComputers(computersData);
            }
        });

        onValue(usersRef, (snapshot) => {
            const usersData = snapshot.val();
            if (usersData) {
                setUsers(usersData);
            }
        });

        onValue(reservationsRef, (snapshot) => {
            const reservationsData = snapshot.val();
            if (reservationsData) {
                const reservationsArray = Object.values(reservationsData);
                setReservations(reservationsArray);
            }
        });

    }, []);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> <p className="table-head">Computadora</p> </th>
                        <th scope="col"><p className="table-head">Reserva</p></th>
                        <th scope="col"><p className="table-head">Usuario</p></th>
                        <th scope="col"><p className="table-head">Estado</p></th>
                        <th scope="col"><p className="table-head">Hora Inicio</p></th>
                        <th scope="col"><p className="table-head">Hora Final</p></th>
                        <th scope="col"><p className="table-head">Acciones</p></th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.ReserveId}>
                            <td className="table-content">{computers[reservation.ComputerId]?.Codigo || 'N/A'}</td>
                            <td className="table-content">{reservation.ReserveId}</td>
                            <td className="table-content">{`${users[reservation.UserId]?.Name} ${users[reservation.UserId]?.LastName}` || 'N/A'}</td>
                            <td className="table-content">{reservation.State}</td>
                            <td className="table-content">{reservation.DatetimeStart}</td>
                            <td className="table-content">{reservation.DatetimeEnd}</td>
                            <td>
                                <button className="agregar">Confirmar</button>
                                <button className="cancelar">Cancelar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}