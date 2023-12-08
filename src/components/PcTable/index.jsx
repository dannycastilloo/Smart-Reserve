import { useComputer } from '../../hooks/useComputer'

export const PcTable = () => {
    
    const { computers, loading } = useComputer()

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
                    {Object.values(computers).map((computer) => (
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