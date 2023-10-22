import { Filter } from "../components/Filter"
import { Table } from "../components/Table"

export const ReserveScreen = () => {

  return (
    <>
      <div className="container">
        <h1 className="title">Listado de Reservas</h1>
        <Filter />
        <Table />
      </div>
    </>
  )
}
