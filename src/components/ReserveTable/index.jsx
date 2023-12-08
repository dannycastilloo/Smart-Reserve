import { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig'
import { ref, onValue } from 'firebase/database';
import { useReserve, confirmReservation, rejectReservation } from '../../hooks/useReserve'

export const ReserveTable = () => {
    const { reservations, loading } = useReserve()
    const [computers, setComputers] = useState({});
    const [users, setUsers] = useState({});

    useEffect(() => {
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
    }, []);

    if (loading) {
        return <div>Cargando...</div>
    }

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