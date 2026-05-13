import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose, onLoginClick }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={`info-tooltip ${isOpen ? 'info-tooltip_open' : ''}`} onClick={handleOverlayClick}>
      <div className="info-tooltip__container">
        <button className="info-tooltip__close-button" onClick={onClose} aria-label="Cerrar"></button>
        <p className="info-tooltip__message">¡El registro se ha completado con éxito!</p>
        <button className="info-tooltip__login-button" onClick={onLoginClick}>
          Inscribirse
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;