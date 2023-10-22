export const PCModal = ({ closeModal }) => {
    return (
        <>
            <div className="project-modal">
                <h1 className="title">Agregar Computadora</h1>

                <label>Código</label>
                <input className="project-name" type="text" id="codigo" name="codigo" placeholder="LAB1502-04" />

                <label>Marca</label>
                <input className="project-name" type="text" id="marca" name="marca" placeholder="HP" />

                <label>Modelo</label>
                <input className="project-name" type="text" id="modelo" name="modelo" placeholder="ThinkCentre" />

                <label>Software Instalados</label>
                <input className="project-name" type="text" id="software" name="software" placeholder="Xamarin" />

                <div>
                    <button className="button-filled" onClick={closeModal}>Guardar</button>
                    <button className="button-outline" onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </>
    )
}
