import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
      setHasSearched(true);
    }
  }, []);

  function handleLoginClick() {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function handleRegisterClick() {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  }

  function handleClosePopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleRegisterSuccess() {
    handleClosePopups();
    setIsInfoTooltipOpen(true);
  }

  function handleSearchResults(results) {
    setArticles(results);
    setHasSearched(true);
    localStorage.setItem('articles', JSON.stringify(results));
  }

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        handleClosePopups();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              isLoggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
              onSignOut={() => setIsLoggedIn(false)}
              articles={articles}
              hasSearched={hasSearched}
              onSearchResults={handleSearchResults}
            />
          )}
        />
        <Route
          path="/saved-news"
          render={() => (
            <SavedNews
              isLoggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
              onSignOut={() => setIsLoggedIn(false)}
            />
          )}
        />
      </Switch>
      <Login
        isOpen={isLoginOpen}
        onClose={handleClosePopups}
        onLogin={() => {}}
        onRegisterClick={handleRegisterClick}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={handleClosePopups}
        onRegister={handleRegisterSuccess}
        onLoginClick={handleLoginClick}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={handleClosePopups}
        onLoginClick={handleLoginClick}
      />
    </BrowserRouter>
  );
}

export default App;