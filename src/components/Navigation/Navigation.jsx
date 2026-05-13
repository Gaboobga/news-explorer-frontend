import './Navigation.css';

function Navigation({ isLoggedIn, userName, onLoginClick, onSignOut }) {
  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <>
          <a href="/" className="navigation__link navigation__link_active">Inicio</a>
          <a href="/saved-news" className="navigation__link">Artículos guardados</a>
          <button className="navigation__button navigation__button_logged-in" onClick={onSignOut}>
            {userName}
            <span className="navigation__logout-icon"></span>
          </button>
        </>
      ) : (
        <>
          <a href="/" className="navigation__link navigation__link_active">Inicio</a>
          <button className="navigation__button" onClick={onLoginClick}>
            Iniciar sesión
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;