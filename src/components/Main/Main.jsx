import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';
import perro from '../../images/perro.png';
import naturaleza from '../../images/naturaleza.png';
import grandTeton from '../../images/grand_teton.png';

const testArticles = [
  {
    url: '1',
    urlToImage: perro,
    publishedAt: '4 de noviembre de 2020',
    title: 'Todo el mundo necesita un lugar de reflexión en la naturaleza',
    description: 'Desde que leí el influyente libro de Richard Louv...',
    source: { name: 'TREEHUGGER' },
  },
  {
    url: '2',
    urlToImage: naturaleza,
    publishedAt: '19 de febrero de 2019',
    title: 'La naturaleza te hace mejor',
    description: 'Milenios atrás ya nos percatamos de ello...',
    source: { name: 'NATIONAL GEOGRAPHIC' },
  },
  {
    url: '3',
    urlToImage: grandTeton,
    publishedAt: '19 de octubre de 2020',
    title: 'El Grand Teton renueva el histórico Camino de la Cresta',
    description: 'La unión de los senderos de la Cascada...',
    source: { name: 'NATIONAL PARKS TRAVELER' },
  },
  {
    url: '4',
    urlToImage: perro,
    publishedAt: '5 de enero de 2021',
    title: 'Artículo extra de prueba',
    description: 'Descripción de prueba...',
    source: { name: 'TEST SOURCE' },
  },
];

function Main({ isLoggedIn, onLoginClick, onSignOut }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [articles, setArticles] = useState([]);

  function handleSearch() {
    setIsLoading(true);
    setHasSearched(false);
    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
      setArticles(testArticles);
    }, 2000);
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
      {!isLoading && hasSearched && articles.length > 0 && (
        <NewsCardList
          articles={articles}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
        />
      )}
      {!isLoading && hasSearched && articles.length === 0 && <NotFound />}
      <About />
      <Footer />
    </main>
  );
}

export default Main;