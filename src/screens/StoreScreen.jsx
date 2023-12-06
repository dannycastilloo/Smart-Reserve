import { FilterTable } from "../components/FilterTable"
import { PcTable } from '../components/PcTable'

export const StoreScreen = () => {

    return (
        <>
            <div className="main">
                <h1 className="title">Almacén de Computadoras</h1>
                <FilterTable />
                <PcTable />
            </div>
        </>
    )
}
