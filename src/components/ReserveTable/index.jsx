import { useReserve } from '../../hooks/useReserve'
import { format } from 'date-fns'
import { useState } from 'react'

export const ReserveTable = ({ search }) => {

    const { reservations, loading } = useReserve()
    const [hiddenReservations, setHiddenReservations] = useState({})

    function formatFecha(input) {
        const fechaObjeto = new Date(input);

        if (isNaN(fechaObjeto.getTime())) {
            return "Invalid Date";
        }

        return format(fechaObjeto, 'dd/MM/yyyy');
    }

    const filteredReservations = Object.values(reservations).filter((reservation) =>
        String(reservation.UserId).includes(search) ||
        formatFecha(reservation.FechaHoraInicio).includes(search) ||
        formatFecha(reservation.FechaHoraFin).includes(search)
    );

    const hideReservation = (id) => {
        setHiddenReservations({...hiddenReservations, [id]: true});
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"><span className="table-head">ID Usuario</span></th>
                        <th scope="col"><span className="table-head">Fecha Hora Inicio</span></th>
                        <th scope="col"><span className="table-head">Fecha Hora Fin</span></th>
                        <th scope="col"><span className="table-head">Acciones</span></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReservations.map((reservation, index) => {
                        if (hiddenReservations[reservation.ComputerId]) {
                            return null;
                        }

                        return (
                            <tr key={reservation.DatabaseId || index}>
                                <td className="table-content" data-titulo='Software'>
                                    {reservation.UserId}
                                </td>
                                <td className="table-content" data-titulo='Marca'>
                                    {formatFecha(reservation.FechaHoraInicio)}
                                </td>
                                <td className="table-content" data-titulo='Modelo'>
                                    {formatFecha(reservation.FechaHoraFin)}
                                </td>
                                <td>
                                    <div className="actions-container">
                                        <button className="agregar">Aceptar</button>
                                        <button className="cancelar" onClick={() => hideReservation(reservation.ComputerId)}>Rechazar</button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
