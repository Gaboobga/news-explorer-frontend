import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './Main.css';

function Main({ isLoggedIn, onLoginClick, onSignOut }) {
  return (
    <main className="main">
      <section className="main__hero">
        <Header
          isLoggedIn={isLoggedIn}
          userName="Elise"
          onLoginClick={onLoginClick}
          onSignOut={onSignOut}
        />
        <div className="main__hero-content">
          <h1 className="main__title">¿Qué está pasando en el mundo?</h1>
          <p className="main__subtitle">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal
          </p>
          <SearchForm />
        </div>
      </section>
      <About />
      <Footer />
    </main>
  );
}

export default Main;