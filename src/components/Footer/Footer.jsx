import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <a href="/" className="footer__link">Inicio</a>
          <a href="https://practicum.com" className="footer__link" target="_blank" rel="noreferrer">Practicum</a>
        </div>
        <div className="footer__icons"></div>
      </nav>
    </footer>
  );
}

export default Footer;