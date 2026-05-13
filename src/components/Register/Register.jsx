import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Register.css';

function Register({ isOpen, onClose, onRegister, onLoginClick }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Inscribirse"
      buttonText="Inscribirse"
      onSubmit={handleSubmit}
    >
      <label className="register__label">
        Correo electrónico
        <input
          className="register__input"
          type="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
      </label>
      <label className="register__label">
        Contraseña
        <input
          className="register__input"
          type="password"
          placeholder="Introduce tu contraseña"
          required
        />
      </label>
      <label className="register__label">
        Nombre de usuario
        <input
          className="register__input"
          type="text"
          placeholder="Introduce tu nombre de usuario"
          required
        />
      </label>
      <p className="register__redirect">
        o <button className="register__redirect-button" type="button" onClick={onLoginClick}>Iniciar sesión</button>
      </p>
    </PopupWithForm>
  );
}

export default Register;