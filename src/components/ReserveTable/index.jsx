import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig'
import { ref, onValue, update, push, remove } from 'firebase/database';

export const ReserveTable = () => {
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
                const reservationsArray = Object.entries(reservationsData).map(([key, value]) => ({ ...value, key }));
                setReservations(reservationsArray);
            }
        });

    }, []);

    // Manejo de reservas
    const confirmReservation = (reservation) => {
        const reservationRef = ref(db, `Reserves/${reservation.key}`);
        update(reservationRef, { State: 'Aceptada' });
    };

    const rejectReservation = (reservation) => {
        const reservationRef = ref(db, `Reserves/${reservation.key}`);
        update(reservationRef, { State: 'Rechazada', Active: 0 });

        const pastReservesRef = ref(db, 'PastReserves');
        push(pastReservesRef, reservation);

        remove(reservationRef);
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> <span className="table-head">Computadora</span> </th>
                        <th scope="col"><span className="table-head">Reserva</span></th>
                        <th scope="col"><span className="table-head">Usuario</span></th>
                        <th scope="col"><span className="table-head">Estado</span></th>
                        <th scope="col"><span className="table-head">Hora Inicio</span></th>
                        <th scope="col"><span className="table-head">Hora Final</span></th>
                        <th scope="col"><span className="table-head">Acciones</span></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(reservations).map((reservation) => (
                        <tr key={reservation.ReserveId}>
                            <td className="table-content" data-titulo='Computadora'>
                                {computers[reservation.ComputerId]?.Codigo || 'N/A'}
                            </td>
                            <td className="table-content" data-titulo='Reserva'>
                                {reservation.ReserveId}
                            </td>
                            <td className="table-content" data-titulo='Usuario'>
                                {`${users[reservation.UserId]?.Name} ${users[reservation.UserId]?.LastName}` || 'N/A'}
                            </td>
                            <td className="table-content" data-titulo='Estado'>
                                {reservation.State}
                            </td>
                            <td className="table-content" data-titulo='Hora Inicio'>
                                {reservation.DatetimeStart}
                            </td>
                            <td className="table-content" data-titulo='Hora Final'>
                                {reservation.DatetimeEnd}
                            </td>
                            <td className="actions-container">
                                <button className="agregar" onClick={() => confirmReservation(reservation)}>Confirmar</button>
                                <button className="cancelar" onClick={() => rejectReservation(reservation)}>Rechazar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}