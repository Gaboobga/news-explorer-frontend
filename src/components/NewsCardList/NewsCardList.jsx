import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ articles, isLoggedIn, onLoginClick }) {
  const [visibleCount, setVisibleCount] = React.useState(3);

  function handleShowMore() {
    setVisibleCount(visibleCount + 3);
  }

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Resultados de la búsqueda</h2>
      <ul className="news-card-list__grid">
        {articles.slice(0, visibleCount).map((article) => (
          <li key={article.url} className="news-card-list__item">
            <NewsCard
              article={article}
              isLoggedIn={isLoggedIn}
              onLoginClick={onLoginClick}
            />
          </li>
        ))}
      </ul>
      {visibleCount < articles.length && (
        <button className="news-card-list__more-button" onClick={handleShowMore}>
          Ver más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;