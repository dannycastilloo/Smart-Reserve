import { useState } from 'react'
import { useComputer, deleteComputer } from '../../hooks/useComputer'

export const PcTable = ({ search }) => {

    const { computers, loading } = useComputer()
    const [hiddenComputers, setHiddenComputers] = useState({})

    const filteredComputers = Object.values(computers).filter((computer) =>
        computer.Codigo.toLowerCase().includes(search.toLowerCase()) ||
        computer.Software.toLowerCase().includes(search.toLowerCase()) ||
        computer.Brand.toLowerCase().includes(search.toLowerCase()) ||
        computer.Model.toLowerCase().includes(search.toLowerCase())
    )

    const hideComputer = (id) => {
        setHiddenComputers({ ...hiddenComputers, [id]: true });
    };

    if (loading) {
        return <div>Cargando...</div>
    }

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
                    {filteredComputers.map((computer) => {
                        if (hiddenComputers[computer.Id]) {
                            return null;
                        }
                        return (
                            <tr key={computer.Id}>
                                <td className="table-content" data-titulo='Código'>
                                    {computer.Codigo}
                                </td>
                                <td className="table-content" data-titulo='Software'>
                                    {computer.Software}
                                </td>
                                <td className="table-content" data-titulo='Marca'>
                                    {computer.Brand}
                                </td>
                                <td className="table-content" data-titulo='Modelo'>
                                    {computer.Model}
                                </td>
                                <td className="actions-container">
                                    <button className="cancelar" onClick={() => hideComputer(computer.Id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}