import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./App.css";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

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
        onRegister={() => {}}
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
