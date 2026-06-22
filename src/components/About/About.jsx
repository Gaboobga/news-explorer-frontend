import './About.css';
import authorImage from '../../images/Foto_perfil_autor.jpeg';

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img
          className="about__image"
          src={authorImage}
          alt="Foto de Gabriel Chávez"
        />
      </div>
      <div className="about__content">
        <h2 className="about__title">Acerca del autor</h2>
        <p className="about__text">
          Mi nombre es Gabriel Chávez, soy desarrollador web full stack con experiencia en el desarrollo de aplicaciones web modernas. Me especializo en la creación de interfaces de usuario atractivas y funcionales utilizando tecnologías como HTML, CSS, JavaScript y React con Vite, así como en el desarrollo de APIs robustas con Node.js y Express.
        </p>
        <p className="about__text">
          Me apasiona crear experiencias digitales que sean intuitivas y accesibles para todos los usuarios. A través de mi formación en TripleTen, he adquirido las habilidades necesarias para enfrentar los retos del desarrollo web profesional, desde el diseño del frontend hasta la implementación del backend y el despliegue en producción.
        </p>
      </div>
    </section>
  );
}

export default About;