import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import { searchNews } from '../../utils/NewsApi';
import './Main.css';

function Main({ isLoggedIn, onLoginClick, onSignOut }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchError, setSearchError] = useState('');

  function handleSearch(query) {
    setIsLoading(true);
    setHasSearched(false);
    setSearchError('');
    searchNews(query)
      .then((data) => {
        setArticles(data.articles);
        setHasSearched(true);
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('lastQuery', query);
      })
      .catch(() => {
        setSearchError('Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.');
        setHasSearched(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>
      {isLoading && <Preloader />}
      {!isLoading && hasSearched && searchError && (
        <p className="main__error">{searchError}</p>
      )}
      {!isLoading && hasSearched && !searchError && articles.length > 0 && (
        <NewsCardList
          articles={articles}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
        />
      )}
      {!isLoading && hasSearched && !searchError && articles.length === 0 && (
        <NotFound />
      )}
      <About />
      <Footer />
    </main>
  );
}

export default Main;