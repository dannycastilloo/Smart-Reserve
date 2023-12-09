import { FilterReserve } from '../components/FilterReserve'
import { ReserveTable } from '../components/ReserveTable'

export const ReserveScreen = () => {

  return (
    <>
      <div className="main">
        <h1 className="title">Listado de Reservas</h1>
        <FilterReserve />
        <ReserveTable />
      </div>
    </>
  )
}
