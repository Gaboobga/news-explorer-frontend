import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      setError('Por favor, introduzca una palabra clave');
      return;
    }
    setError('');
    onSearch(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Introduce un tema"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error && <span className="search-form__error">{error}</span>}
      </div>
      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;