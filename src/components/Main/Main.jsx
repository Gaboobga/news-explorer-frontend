import { useState, useContext } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import { searchNews } from '../../utils/NewsApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import './Main.css';

function Main({ isLoggedIn, onLoginClick, onSignOut, articles, hasSearched, onSearchResults }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleSearch(query) {
    setIsLoading(true);
    setSearchError('');
    localStorage.setItem('lastQuery', query);
    searchNews(query)
      .then((data) => {
        onSearchResults(data.articles);
      })
      .catch(() => {
        setSearchError('Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveArticle(article) {
    MainApi.saveArticle({
      keyword: localStorage.getItem('lastQuery') || 'General',
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .catch((err) => console.error(err));
  }

  return (
    <main className="main">
      <section className="main__hero">
        <Header
          isLoggedIn={isLoggedIn}
          userName={currentUser ? currentUser.name : ''}
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
          onSaveArticle={handleSaveArticle}
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