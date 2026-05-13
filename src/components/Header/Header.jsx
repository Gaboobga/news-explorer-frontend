import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn, userName, onLoginClick, onSignOut, isLight }) {
  return (
    <header className={`header ${isLight ? 'header_light' : ''}`}>
      <a href="/" className={`header__logo ${isLight ? 'header__logo_light' : ''}`}>
        NewsExplorer
      </a>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={onLoginClick}
        onSignOut={onSignOut}
        isLight={isLight}
      />
    </header>
  );
}

export default Header;