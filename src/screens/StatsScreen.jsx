import { StatCard } from '../components/StatCard'
import { Graph } from '../components/graphics/Graph'
import { Graph2 } from '../components/graphics/Graph2'
import { Graph3 } from '../components/graphics/Graph3'
import { Graph4 } from '../components/graphics/Graph4'

export const StatsScreen = () => {
  return (
    <>
      <div className='main'>
        <h1 className='title'>Estadísticas del ciclo 2023-II</h1>

        <div className='stats'>
          <StatCard
            title={'Estado de las reservas'}
            graph={<Graph />} />

          <StatCard
            title={'Softwares disponibles en las computadoras'}
            graph={<Graph2 />} />

          <StatCard
            title={'Carreras con mas reservas'}
            graph={<Graph3 />} />

          <StatCard
            title={'Números de reservas por mes'}
            graph={<Graph4 />} />
        </div>
      </div>
    </>
  )
}
export default StatsScreen;
