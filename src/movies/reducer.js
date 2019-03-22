import { GET_MOVIES } from "./toggleAction";
import { GET_MOVIE } from "./toggleAction";
import { RESET_MOVIE } from "./toggleAction";

const initialState = {
  movies: [],
  movie: {},
  movieLoadedAt: null,
  moviesLoaded: false,
  movieLoaded: false,
  movieDetailId: "166428"
};

export default function(state = initialState, action) {
  const { type, data, movieDetailId } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
        movieLoadedAt: new Date()
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true,
        movieDetailId: movieDetailId
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false
      };
    default:
      return state;
  }
}
