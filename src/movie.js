import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const POSTER_PATH='http://image.tmdb.org/t/p/w154'

const Movie=({title,desc,poster,movie})=>(
  <div>
  <Link to={`/${movie.id}`}>

  <img src={`${POSTER_PATH}${poster}`} alt="Movie Image"></img>
  </Link>

    </div>
  );
export default Movie;
Movie.propTypes={


}
