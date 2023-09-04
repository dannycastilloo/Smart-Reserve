export const LoginScreen = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <img className="logo-login" src="../src/assets/tecsup.png" alt="TECSUP" />
          <p className="title">Sistema de administración para la reserva de computadoras del lab 1502</p>
          <form>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">Contraseña</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </>
  )
}
