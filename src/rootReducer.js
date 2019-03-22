import { combineReducers } from "redux";
import toggle from "./toggle/reducer";
import movies from "../src/movies/reducer";
import TopFiveMovies from "../src/carouselMovie/reducer";
import ToggleOverview from "../src/toggleoverview/reducer";
const rootReducer = combineReducers({
  toggle,
  movies,
  TopFiveMovies,
  ToggleOverview
});

export default rootReducer;
