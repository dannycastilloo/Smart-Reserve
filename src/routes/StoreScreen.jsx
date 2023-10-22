import { FilterPC } from "../components/FilterPC"
import { TablePC } from "../components/TablePC"

export const StoreScreen = () => {

    return (
        <>
            <div className="container">
                <h1 className="title">Almacén de Computadoras</h1>
                <FilterPC />
                <TablePC />
            </div>
        </>
    )
}
