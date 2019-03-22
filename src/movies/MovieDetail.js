import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovie } from "./toggleAction";
import { resetMovie } from "./toggleAction";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieDetail extends React.PureComponent {
  componentWillMount() {
    {
      this.props.resetMovie();
    }
  }

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    const movie = this.props.movie;

    return (
      <div>
        <Moviewrap backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} />

        <MovieContent>
          <Overdrive id={movie.id}>
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h2> {movie.release_date} </h2>
            <p>{movie.overview}</p>
          </div>
        </MovieContent>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  movieLoaded: state.movies.movieLoaded
});

const matchDispatchProps = dispatch => {
  return bindActionCreators({ getMovie, resetMovie }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchProps
)(MovieDetail);

const Moviewrap = styled.div`
  postion: relative;
  background: url(${props => props.backdrop}) center 20% no-repeat;

  padding-top: 50vh;
  background-size: cover;

  @media screen and (max-width: 320px) {
    position: relative;
    padding-top: 0;
  }
`;

const MovieContent = styled.div`
  background: white;
  width: auto;
  text-align: left;
  display: flex;
  padding: 2rem;

  div {
    margin-left: 1rem;
  }

  img {
    position: relative;
    top: -5rem;
  }

  @media screen and (max-width: 320px) {
    background: white;
    text-align: left;
    display: flex;
    flex-flow: row wrap;

    div {
      flex: auto;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    img {
      top: 0;
      right: 0.25%;
    }
  }
`;
