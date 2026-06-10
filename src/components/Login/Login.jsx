import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../hooks/useFormValidation';
import './Login.css';

function Login({ isOpen, onClose, onLogin, onRegisterClick, authError }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Iniciar sesión"
      buttonText="Iniciar sesión"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="login__label">
        Correo electrónico
        <input
          className="login__input"
          type="email"
          name="email"
          placeholder="Introduce tu correo electrónico"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="login__error">{errors.email}</span>}
      </label>
      <label className="login__label">
        Contraseña
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Introduce tu contraseña"
          value={values.password || ''}
          onChange={handleChange}
          required
          minLength={4}
        />
        {errors.password && <span className="login__error">{errors.password}</span>}
      </label>
      <p className="login__redirect">
        o <button className="login__redirect-button" type="button" onClick={onRegisterClick}>Inscribirse</button>
      </p>
      {authError && <p className="login__auth-error">{authError}</p>}
    </PopupWithForm>
  );
}

export default Login;