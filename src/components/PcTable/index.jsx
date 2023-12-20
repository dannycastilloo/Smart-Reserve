import { useComputer, deleteComputer } from '../../hooks/useComputer'

export const PcTable = ({ search }) => {

    const { computers, loading } = useComputer()

    if (loading) {
        return <div>Cargando...</div>
    }

    const filteredComputers = Object.values(computers).filter((computer) =>
        computer.Codigo.toLowerCase().includes(search.toLowerCase()) ||
        computer.Software.toLowerCase().includes(search.toLowerCase()) ||
        computer.Brand.toLowerCase().includes(search.toLowerCase()) ||
        computer.Model.toLowerCase().includes(search.toLowerCase())
    )

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
                    {filteredComputers.map((computer) => (
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
                                <button className="cancelar" onClick={() => deleteComputer(computer.Id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}