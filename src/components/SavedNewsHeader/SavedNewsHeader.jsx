import './SavedNewsHeader.css';

function SavedNewsHeader({ userName, articleCount, keywords }) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Artículos guardados</p>
      <h2 className="saved-news-header__title">
        {userName}, tienes {articleCount} artículos guardados
      </h2>
      <p className="saved-news-header__keywords">
        <span className="saved-news-header__keywords-label">Por palabras clave: </span>
        <span className="saved-news-header__keywords-list">{keywords}</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;