import { FilterTable } from '../components/FilterTable'
import { ReserveTable } from '../components/ReserveTable'

export const ReserveScreen = () => {

  return (
    <>
      <div className="main">
        <h1 className="title">Listado de Reservas</h1>
        <FilterTable />
        <ReserveTable />
      </div>
    </>
  )
}
