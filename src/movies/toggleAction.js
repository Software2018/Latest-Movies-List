export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE = "RESET_MOVIE ";

export function getMovies() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const movies = await res.json();
    return dispatch({
      type: "GET_MOVIES",
      data: movies.results
    });
  };
}

export function getMovie(id) {
  const ID = id;
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US`
    );
    const movie = await res.json();
    return dispatch({
      type: "GET_MOVIE",
      data: movie,
      movieDetailId: ID
    });
  };
}

export function resetMovie() {
  return {
    type: "RESET_MOVIE "
  };
}
