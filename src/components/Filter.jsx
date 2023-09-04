export const Filter = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Todas las reservas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Confirmados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">En espera</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cancelados</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="filter-table">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar por computadora, alumno u otros" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button>Filtros</button>
                <p>Abril 01 - Abril 16</p>
                <button>Descargar</button>
            </div>
        </>
    )
}
