import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/saved-news" component={SavedNews} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;