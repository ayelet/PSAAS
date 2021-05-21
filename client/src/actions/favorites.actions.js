import { favoritesConstants } from "../constants";

export const addFavorite = (id) => {
  console.log("adding to favorite");
  return {
    type: favoritesConstants.FAVORITE_ADDED,
    payload: {
      id: id,
    },
  };
};

export const removeFavorite = (id) => {
  console.log("removing from favorites");
  return {
    type: favoritesConstants.FAVORITE_REMOVED,
    payload: {
      id: id,
    },
  };
};
