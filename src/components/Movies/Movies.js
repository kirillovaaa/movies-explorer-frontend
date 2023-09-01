import React from "react";
import "./Movies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// картинки
import tempImage1 from "../../images/film.png";
import tempImage2 from "../../images/film2.png";
import tempImage3 from "../../images/film3.png";
import tempImage4 from "../../images/film4.png";
import tempImage5 from "../../images/film5.png";
import tempImage6 from "../../images/film6.png";
import tempImage7 from "../../images/film7.png";
import tempImage8 from "../../images/film8.png";
import tempImage9 from "../../images/film9.png";
import tempImage10 from "../../images/film10.png";
import tempImage11 from "../../images/film11.png";
import tempImage12 from "../../images/film12.png";
import tempImage13 from "../../images/film13.png";
import tempImage14 from "../../images/film14.png";
import tempImage15 from "../../images/film15.png";
import tempImage16 from "../../images/film16.png";

// источник данных
export const moviesList = [
  {
    id: 1,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage1,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 2,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage2,
    time: "1ч 25м",
    isSaved: true,
  },
  {
    id: 3,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage3,
    time: "1ч 25м",
    isSaved: true,
  },
  {
    id: 4,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage4,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 5,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage5,
    time: "1ч 25м",
    isSaved: true,
  },
  {
    id: 6,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage6,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 7,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage7,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 8,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage8,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 9,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage9,
    time: "1ч 25м",
    isSaved: true,
  },
  {
    id: 10,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage10,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 11,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage11,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 12,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage12,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 13,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage13,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 14,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage14,
    time: "1ч 25м",
    isSaved: true,
  },
  {
    id: 15,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage15,
    time: "1ч 25м",
    isSaved: false,
  },
  {
    id: 16,
    name: "Пятьдесят оттенков черного",
    imageSrc: tempImage16,
    time: "1ч 25м",
    isSaved: false,
  },
];

const Movies = () => {
  const handleClickMore = () => {
    console.log("вызвать запрос на получение следующих фильмов");
  };

  return (
    <main className="movies">
      <SearchForm />

      <MoviesCardList
        movies={moviesList}
        hasMoreMovies={true} // получить свойство из последнего запроса
        onClickMore={handleClickMore}
      />
    </main>
  );
};

export default Movies;
