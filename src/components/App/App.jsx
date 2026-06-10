import { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as MainApi from "../../utils/MainApi";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      MainApi.getCurrentUser()
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem('jwt');
        });
    }
  }, []);

  useEffect(() => {
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
      setHasSearched(true);
    }
  }, []);

  function handleLoginClick() {
    setAuthError('');
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  }

  function handleRegisterClick() {
    setAuthError('');
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  }

  function handleClosePopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
    setAuthError('');
  }

  function handleRegisterSuccess() {
    handleClosePopups();
    setIsInfoTooltipOpen(true);
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        return MainApi.getCurrentUser();
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        handleClosePopups();
      })
      .catch(() => {
        setAuthError('Correo electrónico o contraseña incorrectos');
      });
  }

  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then(() => {
        handleRegisterSuccess();
      })
      .catch(() => {
        setAuthError('Este correo electrónico ya está registrado');
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('articles');
    setIsLoggedIn(false);
    setCurrentUser(null);
    setArticles([]);
    setHasSearched(false);
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
    <CurrentUserContext.Provider value={currentUser}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                isLoggedIn={isLoggedIn}
                onLoginClick={handleLoginClick}
                onSignOut={handleSignOut}
                articles={articles}
                hasSearched={hasSearched}
                onSearchResults={handleSearchResults}
              />
            )}
          />
          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            isLoggedIn={isLoggedIn}
            onLoginClick={handleLoginClick}
            onSignOut={handleSignOut}
          />
        </Switch>
        <Login
          isOpen={isLoginOpen}
          onClose={handleClosePopups}
          onLogin={handleLogin}
          onRegisterClick={handleRegisterClick}
          authError={authError}
        />
        <Register
          isOpen={isRegisterOpen}
          onClose={handleClosePopups}
          onRegister={handleRegister}
          onLoginClick={handleLoginClick}
          authError={authError}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={handleClosePopups}
          onLoginClick={handleLoginClick}
        />
      </HashRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;