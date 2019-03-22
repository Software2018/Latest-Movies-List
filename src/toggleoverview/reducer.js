import { GET_OVERVIEW } from "./carouselAction";
const initialState = {
  overview: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_OVERVIEW:
      return {
        ...state,
        overview: !state.overview
      };

    default:
      return state;
  }
}
