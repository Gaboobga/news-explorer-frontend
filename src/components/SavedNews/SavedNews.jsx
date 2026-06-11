import { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';
import './SavedNews.css';

function SavedNews({ isLoggedIn, onLoginClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    MainApi.getSavedArticles()
      .then((articles) => {
        setSavedArticles(articles);
      })
      .catch((err) => console.error(err));
  }, []);

  function getKeywords() {
    const keywordCount = {};
    savedArticles.forEach((article) => {
      if (article.keyword) {
        keywordCount[article.keyword] = (keywordCount[article.keyword] || 0) + 1;
      }
    });
    const sorted = Object.keys(keywordCount).sort((a, b) => keywordCount[b] - keywordCount[a]);
    if (sorted.length <= 3) {
      return sorted.join(', ');
    }
    return `${sorted[0]}, ${sorted[1]} y ${sorted.length - 2} más`;
  }

  function handleDeleteArticle(articleId) {
    MainApi.deleteArticle(articleId)
      .then(() => {
        setSavedArticles(savedArticles.filter((article) => article._id !== articleId));
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="saved-news">
      <Header
        isLoggedIn={isLoggedIn}
        userName={currentUser ? currentUser.name : ''}
        onLoginClick={onLoginClick}
        onSignOut={onSignOut}
        isLight={true}
      />
      <SavedNewsHeader
        userName={currentUser ? currentUser.name : ''}
        articleCount={savedArticles.length}
        keywords={getKeywords()}
      />
      <NewsCardList
        articles={savedArticles}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        isSaved={true}
        onDeleteArticle={handleDeleteArticle}
      />
      <Footer />
    </div>
  );
}

export default SavedNews;