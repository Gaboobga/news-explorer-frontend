import { useLocation, Link } from 'react-router-dom';
import './Navigation.css';
import loginIconWhite from '../../images/login_icon_white.svg';
import loginIconBlack from '../../images/login_icon_black.svg';

function Navigation({ isLoggedIn, userName, onLoginClick, onSignOut, isLight, isMenuOpen, onMenuClose }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSaved = location.pathname === '/saved-news';

  function handleLinkClick() {
    onMenuClose();
  }

  return (
    <nav className={`navigation ${isMenuOpen ? 'navigation_open' : ''}`}>
      {isLoggedIn ? (
        <div className="navigation__links">
          <div className="navigation__links-group">
            <Link to="/" onClick={handleLinkClick} className={`navigation__link ${isLight ? 'navigation__link_dark' : ''} ${isHome ? (isLight ? 'navigation__link_active-dark' : 'navigation__link_active') : ''}`}>
              Inicio
            </Link>
            <Link to="/saved-news" onClick={handleLinkClick} className={`navigation__link ${isLight ? 'navigation__link_dark' : ''} ${isSaved ? (isLight ? 'navigation__link_active-dark' : 'navigation__link_active') : ''}`}>
              Artículos guardados
            </Link>
          </div>
          <button className={`navigation__button ${isLight ? 'navigation__button_dark' : 'navigation__button_logged-in'}`} onClick={onSignOut}>
            {userName}
            <img className="navigation__logout-icon" src={isLight ? loginIconBlack : loginIconWhite} alt="Salir" />
          </button>
        </div>
      ) : (
        <div className="navigation__links">
          <div className="navigation__links-group">
            <Link to="/" onClick={handleLinkClick} className={`navigation__link ${isLight ? 'navigation__link_dark' : ''} ${isHome ? (isLight ? 'navigation__link_active-dark' : 'navigation__link_active') : ''}`}>
              Inicio
            </Link>
          </div>
          <button className={`navigation__button ${isLight ? 'navigation__button_dark' : ''}`} onClick={onLoginClick}>
            Iniciar sesión
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;