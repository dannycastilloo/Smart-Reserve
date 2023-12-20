import { useState } from 'react'
import { FilterTable } from "../components/FilterTable"
import { PcTable } from '../components/PcTable'

export const StoreScreen = () => {

    const [search, setSearch] = useState('')

    return (
        <>
            <div className="main">
                <h1 className="title">Almacén de Computadoras</h1>
                <FilterTable setSearch={setSearch} />
                <PcTable search={search} />
            </div>
        </>
    )
}
