export const FilterReserve = ({ setSearch }) => {
    return (
        <>
            <div className="filter-table">
                <form className="filter" role="search">
                    <input
                        type="search"
                        placeholder="Buscar por nombre, estado u otros"
                        aria-label="Search"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </form>
            </div>
        </>
    )
}