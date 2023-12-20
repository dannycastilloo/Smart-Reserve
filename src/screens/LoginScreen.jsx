import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLoginError('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img className="logo-login" src="/tecsup.png" alt="TECSUP" />
        
        <form onSubmit={handleLogin} className="login-inputs">
        <p className="title-login">Sistema de administración para la reserva de computadoras</p>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          {loginError && <p className="error-message">{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;