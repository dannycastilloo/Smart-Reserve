import { StatCard } from '../components/StatCard'
import { Graph } from '../components/graphics/Graph'
import { Graph2 } from '../components/graphics/Graph2'
import { ReserveTable } from '../components/ReserveTable'

export const HomeScreen = () => {
  return (
    <>
      <div className='main'>
        <h1 className='title'>¡Bienvenido a Smart Reserve!</h1>

        <div className='stats'>
          <StatCard
            title={'Estado de las reservas'}
            graph={<Graph />} />

          <StatCard
            title={'Softwares disponibles en las computadoras'}
            graph={<Graph2 />} />
        </div>

        <h3 className='subtitle'>Últimas reservas</h3>
        <ReserveTable />
      </div>
    </>
  )
}