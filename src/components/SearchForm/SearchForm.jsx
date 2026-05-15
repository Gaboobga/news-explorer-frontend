import './SearchForm.css';

function SearchForm({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Introduce un tema"
        required
      />
      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;