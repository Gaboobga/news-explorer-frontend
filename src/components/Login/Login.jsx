import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Login.css';

function Login({ isOpen, onClose, onLogin, onRegisterClick }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Iniciar sesión"
      buttonText="Iniciar sesión"
      onSubmit={handleSubmit}
    >
      <label className="login__label">
        Correo electrónico
        <input
          className="login__input"
          type="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
      </label>
      <label className="login__label">
        Contraseña
        <input
          className="login__input"
          type="password"
          placeholder="Introduce tu contraseña"
          required
        />
      </label>
      <p className="login__redirect">
        o <button className="login__redirect-button" type="button" onClick={onRegisterClick}>Inscribirse</button>
      </p>
    </PopupWithForm>
  );
}

export default Login;