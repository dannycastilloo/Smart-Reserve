import './index.scss'

export const StatCard = ({ title, graph }) => {
  return (
    <>
        <article className='stat-card'>
            <h3>{title}</h3>
            <figure>{graph}</figure>
        </article>
    </>
  )
}
