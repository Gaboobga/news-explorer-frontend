import './NotFound.css';

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__icon"></div>
      <h3 className="not-found__title">No se ha encontrado nada</h3>
      <p className="not-found__text">
        Lo sentimos, pero no hay noticias que coincidan con tus términos de búsqueda.
      </p>
    </section>
  );
}

export default NotFound;