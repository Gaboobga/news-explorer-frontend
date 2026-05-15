import './NewsCard.css';
import saveNormal from '../../images/save_normal.svg';
import trashIcon from '../../images/trash_icon.svg';

function NewsCard({ article, isLoggedIn, onLoginClick, isSaved }) {
  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />
        {isSaved && article.keyword && (
          <span className="news-card__keyword">{article.keyword}</span>
        )}
        <button className="news-card__save-button" aria-label={isSaved ? 'Eliminar artículo' : 'Guardar artículo'}>
          <img
            className="news-card__save-icon"
            src={isSaved ? trashIcon : saveNormal}
            alt={isSaved ? 'Eliminar' : 'Guardar'}
          />
        </button>
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{article.publishedAt}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source.name}</p>
      </div>
    </article>
  );
}

export default NewsCard;