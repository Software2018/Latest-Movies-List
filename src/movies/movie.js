import React from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";
const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ title, desc, poster, movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <img
        className="flex-item"
        src={`${POSTER_PATH}${poster}`}
        alt="Movie Image"
      />
    </Overdrive>
  </Link>
);

export default Movie;
