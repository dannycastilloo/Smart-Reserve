import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';

export const Table = () => {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const reservationsRef = ref(db, 'Reserves');

        try {
            onValue(reservationsRef, (snapshot) => {
                const reservationsData = snapshot.val();
                if (reservationsData) {
                    const reservationsArray = Object.values(reservationsData);
                    setReservations(reservationsArray);
                } else {
                    setError('No se encontraron datos de reservas.');
                }
            });
        } catch (error) {
            setError('Error al obtener datos de reservas: ' + error.message);
        }
    }, []);

    return (
        <>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Computadora</th>
                            <th scope="col">Reserva</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Hora Inicio</th>
                            <th scope="col">Hora Final</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation.ReserveId}>
                                <td>{reservation.ComputerId}</td>
                                <td>{reservation.ReserveId}</td>
                                <td>{reservation.UserId}</td>
                                <td>{reservation.State}</td>
                                <td>{reservation.DatetimeStart}</td>
                                <td>{reservation.DatetimeEnd}</td>
                                <td>
                                    <button className="btn btn-success">Confirmar</button>
                                    <button className="btn btn-danger">Cancelar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};