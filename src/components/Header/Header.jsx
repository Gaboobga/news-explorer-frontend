import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn, userName, onLoginClick, onSignOut, isLight }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`header ${isLight ? 'header_light' : ''}`}>
      <a href="/" className={`header__logo ${isLight ? 'header__logo_light' : ''}`}>
        NewsExplorer
      </a>
      <button
        className={`header__menu-button ${isMenuOpen ? 'header__menu-button_open' : ''} ${isLight ? 'header__menu-button_dark' : ''}`}
        onClick={handleMenuToggle}
        aria-label="Menú"
      ></button>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={onLoginClick}
        onSignOut={onSignOut}
        isLight={isLight}
        isMenuOpen={isMenuOpen}
        onMenuClose={handleMenuClose}
      />
    </header>
  );
}

export default Header;