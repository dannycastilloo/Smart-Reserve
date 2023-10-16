export const ProfileModal = ({ closeModal }) => {
    return (
        <>
            <div className="project-modal">
                <h1>Editar perfil</h1>

                <label>Nombres</label>
                <input className="project-name" type="text" id="nombre" name="nombre" placeholder="John" />

                <label>Apellidos</label>
                <input className="project-name" type="text" id="apellido" name="apellido" placeholder="Doe" />

                <label>Correo electrónico</label>
                <input className="project-name" type="email" id="correo" name="correo" placeholder="example@tecsup.edu.pe" />

                <label>Celular</label>
                <input className="project-name" type="phone" id="celular" name="celular" placeholder="946583472" />

                <button className="button-project" onClick={closeModal}>Guardar</button>
            </div>
        </>
    )
}