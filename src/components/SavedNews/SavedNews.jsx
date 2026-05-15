import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import "./SavedNews.css";
import perro from "../../images/perro.png";
import naturaleza from "../../images/naturaleza.png";
import granTeton from "../../images/grand_teton.png";

const savedArticles = [
  {
    url: "1",
    urlToImage: perro,
    publishedAt: "4 de noviembre de 2020",
    title: "Todo el mundo necesita un lugar de reflexión en la naturaleza",
    description: "Desde que leí el influyente libro de Richard Louv...",
    source: { name: "TREEHUGGER" },
    keyword: "Naturaleza",
  },
  {
    url: "2",
    urlToImage: naturaleza,
    publishedAt: "19 de febrero de 2019",
    title: "La naturaleza te hace mejor",
    description: "Milenios atrás ya nos percatamos de ello...",
    source: { name: "NATIONAL GEOGRAPHIC" },
    keyword: "Naturaleza",
  },
  {
    url: "3",
    urlToImage: granTeton,
    publishedAt: "19 de octubre de 2020",
    title: "El Grand Teton renueva el histórico Camino de la Cresta",
    description: "La unión de los senderos de la Cascada...",
    source: { name: "NATIONAL PARKS TRAVELER" },
    keyword: "Yellowstone",
  },
];

function SavedNews({ isLoggedIn, onLoginClick, onSignOut }) {
  return (
    <div className="saved-news">
      <Header
        isLoggedIn={isLoggedIn}
        userName="Elise"
        onLoginClick={onLoginClick}
        onSignOut={onSignOut}
        isLight={true}
      />
      <SavedNewsHeader
        userName="Elise"
        articleCount={savedArticles.length}
        keywords="Naturaleza, Yellowstone, y 2 más"
      />
      <NewsCardList
        articles={savedArticles}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        isSaved={true}
      />
      <Footer />
    </div>
  );
}

export default SavedNews;
