export const ProfileScreen = () => {
  return (
    <>
      <div className="edit-profile">

        <div className="row">
          <div className="col">
            <h1>Editar perfil</h1>
          </div>
          <div className="col">
            <img className="user-icon" src="../src/assets/user.png" alt="Foto de Perfil" />
          </div>
        </div>
        <br />
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" placeholder="Mehrab" />
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" placeholder="Bozorgi" />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo</label>
            <input type="email" className="form-control" placeholder="Mehra.business@tecsup.edu.pe" />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Dirección</label>
            <input type="text" className="form-control" placeholder="33062 Zboncak isle" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" placeholder="974635278" />
          </div>
          <div className="mb-3">
            <label htmlFor="ciudad" className="form-label">Ciudad</label>
            <select className="form-select">
              <option>Lima</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="distrito" className="form-label">Distrito</label>
            <select className="form-select">
              <option>Lince</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Cancelar</button>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}
