import './NewsCard.css';
import saveNormal from '../../images/save_normal.svg';
import saveHover from '../../images/save_hover.svg';
import saveSelect from '../../images/save_select.svg';

function NewsCard({ article, isLoggedIn, onLoginClick }) {
  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />
        <button className="news-card__save-button" aria-label="Guardar artículo">
          <img className="news-card__save-icon" src={saveNormal} alt="Guardar" />
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