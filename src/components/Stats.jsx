export const Stats = () => {
    return (
        <div className="container">
            <h1 className="title">Resumen del mes</h1>
            <br />
            <div className="row">
                <div className="col stats">
                    <h3 className="title">Carreras con más reservas</h3>
                    <img className="stats" src="../src/assets/cap1.png" alt="Reservas" />
                </div>
                <div className="col stats">
                    <h3 className="title">Nivel de satisfacción</h3>
                    <img className="stats" src="../src/assets/cap2.png" alt="Reservas" />
                </div>
            </div>
        </div>
    )
}
