import { favoritesConstants } from "../constants";

let localFaves = JSON.parse(localStorage.getItem("favorites"));
// const initialState = user ? { loggedIn: true, user } : {};
// const initialState = [];
const initialState = localFaves ? [...localFaves] : [];

export function favorites(state = initialState, action) {
  console.log("^^^ fav reducer: ", state);
  switch (action.type) {
    case favoritesConstants.FAVORITE_ADDED:
      return {
        ...state,
        faves: [...state.faves, action.provider],
      };

    case favoritesConstants.FAVORITE_REMOVED:
      // return {state.filter((item) => item !== action.id)};
      // return state;
      return {
        faves: [state.faves.filter((fav) => fav._id !== action.payload._id)],
      };
    default:
      return state;
  }
}
