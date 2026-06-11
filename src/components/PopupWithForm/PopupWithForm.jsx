import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, title, children, buttonText, onSubmit, isValid }) {
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`} onClick={handleOverlayClick}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose} aria-label="Cerrar"></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" onSubmit={onSubmit}>
          {children}
          <button
            className="popup__submit-button"
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;