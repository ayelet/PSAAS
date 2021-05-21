import { favoritesConstants } from "../constants";

let favs = JSON.parse(localStorage.getItem("favorites"));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = [];

export function favorites(state = initialState, action) {
  console.log("fav reucer: ", state, favs);
  switch (action.type) {
    case favoritesConstants.ADD_FAV:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
}
