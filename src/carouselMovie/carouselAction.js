export const GET_TOPFIVE = "GET_TOPFIVE";

export function getTopFiveMovies() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=12c4e800f9eac5a36c0f5b4c2c203834&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const movies = await res.json();
    const movieTopFive = movies.results.slice(0, 5).map(movie => movie);
    const id = movieTopFive.map(movie => movie.id);
    const title = movieTopFive.map(movie => movie.title);
    return dispatch({
      type: "GET_TOPFIVE",
      data: movieTopFive,
      id: id,
      title: title
    });
  };
}
