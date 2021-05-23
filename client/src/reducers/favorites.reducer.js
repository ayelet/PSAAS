import { favoritesConstants } from "../constants";

let favs = JSON.parse(localStorage.getItem("favorites"));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = [];

//  const updateFavouriteState = (index, newValue, points) => {
// // +   const updatedPoint = points[index];
//    updatedPoint.favourite = newValue;

//    return [...points.slice(0, index), updatedPoint, ...points.slice(index + 1)];
//    };

export function favorites(state = initialState, action) {
  console.log("fav reducer: ", state, favs);
  switch (action.type) {
    case favoritesConstants.FAVORITE_ADDED:
      return {
        ...state,
        id: action.id,
      };
    case favoritesConstants.FAVORITE_REMOVED:
      return state;
    // return { favs.filter(fav => fav.id != action.id)}
    default:
      return state;
  }
}
