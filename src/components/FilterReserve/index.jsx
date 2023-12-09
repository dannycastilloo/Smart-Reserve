export const FilterReserve = () => {
    return (
        <>
            <div className="filter-table">
                <form className="filter" role="search">
                    <input
                      type="search"
                      placeholder="Buscar por nombre, estado u otros"
                      aria-label="Search"
                    />
                </form>
            </div>
        </>
    )
}