import { useState } from 'react';
import './NewsCard.css';
import saveNormal from '../../images/save_normal.svg';
import saveSelect from '../../images/save_select.svg';
import trashIcon from '../../images/trash_icon.svg';
import trashIconHover from '../../images/trash_icon_hover.svg';
import { formatDate } from '../../utils/formatDate';

function NewsCard({ article, isLoggedIn, onLoginClick, isSaved, onSaveArticle, onDeleteArticle }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSavedLocal, setIsSavedLocal] = useState(false);
  const [isTrashHover, setIsTrashHover] = useState(false);

  function handleSaveClick() {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }
    if (isSaved) {
      onDeleteArticle(article._id);
    } else if (isSavedLocal) {
      onDeleteArticle(article._id);
      setIsSavedLocal(false);
    } else {
      onSaveArticle(article);
      setIsSavedLocal(true);
    }
  }

  function getSaveIcon() {
    if (isSaved) return isTrashHover ? trashIconHover : trashIcon;
    if (isSavedLocal) return saveSelect;
    return saveNormal;
  }

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={article.urlToImage || article.image}
          alt={article.title}
        />
        {isSaved && article.keyword && (
          <span className="news-card__keyword">{article.keyword}</span>
        )}
        <div className="news-card__save-container">
          {!isLoggedIn && showTooltip && (
            <span className="news-card__tooltip">Inicia sesión para guardar artículos</span>
          )}
          <button
            className={`news-card__save-button ${isSavedLocal ? 'news-card__save-button_active' : ''}`}
            aria-label={isSaved ? 'Eliminar artículo' : 'Guardar artículo'}
            onClick={handleSaveClick}
            onMouseEnter={() => { setShowTooltip(true); setIsTrashHover(true); }}
            onMouseLeave={() => { setShowTooltip(false); setIsTrashHover(false); }}
          >
            <img
              className="news-card__save-icon"
              src={getSaveIcon()}
              alt={isSaved ? 'Eliminar' : 'Guardar'}
            />
          </button>
        </div>
      </div>
      <div className="news-card__content">
        <p className="news-card__date">{formatDate(article.publishedAt || article.date)}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description || article.text}</p>
        <p className="news-card__source">{article.source.name || article.source}</p>
      </div>
    </article>
  );
}

export default NewsCard;