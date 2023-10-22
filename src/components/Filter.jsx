export const Filter = () => {

    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Todas las reservas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Confirmados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">En espera</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cancelados</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="filter-table">
                <form className="d-flex filter-pc" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar por computadora, alumno u otros" aria-label="Search" />
                </form>
                <button className="filtros"> <img src="../src/assets/Filter.svg" alt="Filtros" /> Filtros</button>

                <button className="filtros"> <img src="../src/assets/calendar.svg" alt="Calendar" /> Abril 01 - Abril 16</button>

                <button className="filtros" onClick={handleImpresion}> <img src="../src/assets/download.svg" alt="Download" /> Descargar</button>
            </div>
        </>
    )
}
