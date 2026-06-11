import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ articles, isLoggedIn, onLoginClick, isSaved, onSaveArticle, onDeleteArticle }) {
  const [visibleCount, setVisibleCount] = React.useState(3);

  function handleShowMore() {
    setVisibleCount(visibleCount + 3);
  }

  return (
    <section className="news-card-list">
      {!isSaved && <h2 className="news-card-list__title">Resultados de la búsqueda</h2>}
      <ul className="news-card-list__grid">
        {articles.slice(0, visibleCount).map((article) => (
          <li key={article.url || article._id} className="news-card-list__item">
            <NewsCard
              article={article}
              isLoggedIn={isLoggedIn}
              onLoginClick={onLoginClick}
              isSaved={isSaved}
              onSaveArticle={onSaveArticle}
              onDeleteArticle={onDeleteArticle}
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