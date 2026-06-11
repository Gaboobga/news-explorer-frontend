import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormValidation from '../../hooks/useFormValidation';
import './Register.css';

function Register({ isOpen, onClose, onRegister, onLoginClick, authError }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.email, values.password, values.name);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Inscribirse"
      buttonText="Inscribirse"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="register__label">
        Correo electrónico
        <input
          className="register__input"
          type="email"
          name="email"
          placeholder="Introduce tu correo electrónico"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="register__error">{errors.email}</span>}
      </label>
      <label className="register__label">
        Contraseña
        <input
          className="register__input"
          type="password"
          name="password"
          placeholder="Introduce tu contraseña"
          value={values.password || ''}
          onChange={handleChange}
          required
          minLength={4}
        />
        {errors.password && <span className="register__error">{errors.password}</span>}
      </label>
      <label className="register__label">
        Nombre de usuario
        <input
          className="register__input"
          type="text"
          name="name"
          placeholder="Introduce tu nombre de usuario"
          value={values.name || ''}
          onChange={handleChange}
          required
          minLength={4}
          maxLength={30}
        />
        {errors.name && <span className="register__error">{errors.name}</span>}
      </label>
      <p className="register__redirect">
        o <button className="register__redirect-button" type="button" onClick={onLoginClick}>Iniciar sesión</button>
      </p>
      {authError && <p className="register__auth-error">{authError}</p>}
    </PopupWithForm>
  );
}

export default Register;