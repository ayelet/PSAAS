import { favoritesConstants } from "../constants";

export const addFavorite = (provider) => {
  console.log("adding to favorite");
  return {
    type: favoritesConstants.FAVORITE_ADDED,
    payload: { provider },
  };
};

export const removeFavorite = (provider) => {
  console.log("removing from favorites");
  return {
    type: favoritesConstants.FAVORITE_REMOVED,
    payload: { provider },
  };
};
