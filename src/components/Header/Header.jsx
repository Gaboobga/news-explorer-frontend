import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn, userName, onLoginClick, onSignOut }) {
  return (
    <header className="header">
      <a href="/" className="header__logo">NewsExplorer</a>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLoginClick={onLoginClick}
        onSignOut={onSignOut}
      />
    </header>
  );
}

export default Header;