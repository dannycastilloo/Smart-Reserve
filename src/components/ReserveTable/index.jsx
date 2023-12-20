import { useReserve } from '../../hooks/useReserve'
import { format } from 'date-fns'

export const ReserveTable = ({ search }) => {

    const { reservations, loading } = useReserve()

    const formatearFecha = (fecha) => {
        const fechaObjeto = new Date(fecha);
        return format(fechaObjeto, 'dd/MM/yyyy');
    }

    const filteredReservations = Object.values(reservations).filter((reservation) =>
        String(reservation.UserId).includes(search) ||
        formatearFecha(reservation.FechaHoraInicio).includes(search) ||
        formatearFecha(reservation.FechaHoraFin).includes(search)
    );

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
                    {filteredReservations.map((reservation, index) => (
                        <tr key={reservation.DatabaseId || index}>
                            <td className="table-content" data-titulo='Software'>
                                {reservation.UserId}
                            </td>
                            <td className="table-content" data-titulo='Marca'>
                                {formatearFecha(reservation.FechaHoraInicio)}
                            </td>
                            <td className="table-content" data-titulo='Modelo'>
                                {formatearFecha(reservation.FechaHoraFin)}
                            </td>
                            <td>
                                <div className="actions-container">
                                    <button className="agregar">Aceptar</button>
                                    <button className="cancelar" onClick={() => deleteComputer(reservation.Id)}>Rechazar</button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}