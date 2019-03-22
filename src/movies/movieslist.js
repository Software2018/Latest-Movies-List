import React from "react";
import Movie from "./movie";
import MovieCarousel from "../carouselMovie/movieCarousel";
import { connect } from "react-redux";
import { getMovies } from "./toggleAction";
import { getTopFiveMovies } from "../carouselMovie/carouselAction";
import { bindActionCreators } from "redux";

class MovieList extends React.PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded, movieLoadedAt, getTopFiveMovies } = this.props;
    const Hour = 60 * 60 * 1000;

    if (!isLoaded || new Date() - new Date(movieLoadedAt) > Hour) {
      getMovies();
      getTopFiveMovies();
    }
  }

  render() {
    const { movies, movieTopFive, overview, id, title } = this.props;

    return (
      <div>
        <MovieCarousel
          movieTopFive={movieTopFive}
          overview={overview}
          id={id}
          title={title}
        />
        <div className="Flex">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              desc={movie.overview}
              poster={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    );
  }
}

const matchDispatchProps = dispatch => {
  return bindActionCreators({ getMovies, getTopFiveMovies }, dispatch);
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  movieLoadedAt: state.movies.movieLoadedAt,
  movieTopFive: state.TopFiveMovies.moviesTopFive,
  movieLoaded: state.TopFiveMovies.movieLoaded,
  overview: state.TopFiveMovies.overview,
  id: state.TopFiveMovies.id,
  title: state.TopFiveMovies.title
});

export default connect(
  mapStateToProps,
  matchDispatchProps
)(MovieList);
