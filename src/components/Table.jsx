import React from 'react'

export const Table = () => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Computadora</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora Inicio</th>
                        <th scope="col">Hora Final</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LAB1502-05</td>
                        <td>Chieko Chute</td>
                        <td>Profesor</td>
                        <td>08/04/2024</td>
                        <td>2:00 PM</td>
                        <td>6:00 PM</td>
                        <td>
                            <button className="btn btn-success">Confirmar</button>
                            <button className="btn btn-danger">Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
