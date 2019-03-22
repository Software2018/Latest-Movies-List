import { GET_TOPFIVE } from "./carouselAction";

const initialState = {
  moviesTopFive: [],
  movieLoaded: false,

  id: null
};

export default function(state = initialState, action) {
  const { type, data, id, title } = action;
  switch (type) {
    case GET_TOPFIVE:
      return {
        ...state,
        moviesTopFive: data,
        id: id,
        title: title,
        movieLoaded: true
      };

    default:
      return state;
  }
}
