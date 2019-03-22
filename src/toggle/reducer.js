import { TOGGLE_NAV } from "./toggleAction";

const initialState = {
  nav: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_NAV:
      return { ...state, messageVisibility: !state.messageVisibility };

    default:
      return state;
  }
}
