import './ConfirmSignOut.css';

function ConfirmSignOut({ isOpen, onClose, onConfirm }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={`confirm-sign-out ${isOpen ? 'confirm-sign-out_open' : ''}`} onClick={handleOverlayClick}>
      <div className="confirm-sign-out__container">
        <button className="confirm-sign-out__close-button" onClick={onClose} aria-label="Cerrar"></button>
        <p className="confirm-sign-out__message">¿Estás seguro que quieres cerrar sesión?</p>
        <div className="confirm-sign-out__buttons">
          <button className="confirm-sign-out__confirm-button" onClick={onConfirm}>
            Sí, cerrar sesión
          </button>
          <button className="confirm-sign-out__cancel-button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSignOut;