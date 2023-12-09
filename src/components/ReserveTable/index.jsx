import { useReserve } from '../../hooks/useReserve'
import { format } from 'date-fns'

export const ReserveTable = () => {
    const { reservations, loading } = useReserve()

    const formatearFecha = (fecha) => {
        const fechaObjeto = new Date(fecha);
        return format(fechaObjeto, 'dd/MM/yyyy');
    };

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
                    {Object.values(reservations).map((reservation) => (
                        <tr key={reservation.ComputerId}>
                            <td className="table-content" data-titulo='Software'>
                                {reservation.UserId}
                            </td>
                            <td className="table-content" data-titulo='Marca'>
                                {formatearFecha(reservation.FechaHoraInicio)}
                            </td>
                            <td className="table-content" data-titulo='Modelo'>
                                {formatearFecha(reservation.FechaHoraFin)}
                            </td>
                            <td className="actions-container">
                                <button className="cancelar" onClick={() => deleteComputer(reservation.Id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}