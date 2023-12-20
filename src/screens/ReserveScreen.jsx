import { useState } from 'react'
import { FilterReserve } from '../components/FilterReserve'
import { ReserveTable } from '../components/ReserveTable'

export const ReserveScreen = () => {

  const [search, setSearch] = useState('')

  return (
    <>
      <div className="main">
        <h1 className="title">Listado de Reservas</h1>
        <FilterReserve setSearch={setSearch} />
        <ReserveTable search={search} />
      </div>
    </>
  )
}
