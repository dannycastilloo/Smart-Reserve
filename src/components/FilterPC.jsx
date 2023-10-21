export const FilterPC = () => {
    return (
        <div className="filter-table">
            <form className="d-flex filter-pc" role="search">
                
                <input className="form-control me-2" type="search" placeholder="Buscar por marca, modelo u otros" aria-label="Search"></input>
            </form>
            <button className="filtros"> <img src="../src/assets/Filter.svg" alt="Filtros" />Filtros</button>
            <button className="agregar">Agregar</button>
        </div>
    )
}
