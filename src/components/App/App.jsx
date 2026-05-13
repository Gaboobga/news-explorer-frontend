import { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              isLoggedIn={isLoggedIn}
              onLoginClick={() => {}}
              onSignOut={() => setIsLoggedIn(false)}
            />
          )}
        />
        <Route
          path="/saved-news"
          render={() => (
            <SavedNews
              isLoggedIn={isLoggedIn}
              onLoginClick={() => {}}
              onSignOut={() => setIsLoggedIn(false)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;