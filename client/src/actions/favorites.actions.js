import { favoritesConstants } from "../constants";

export const addFavorite = (provider) => {
  return {
    type: favoritesConstants.FAVORITE_ADDED,
    payload: {
      provider: provider,
    },
  };
};

export const removeFavorite = (provider) => {
  return {
    type: favoritesConstants.FAVORITE_REMOVED,
    payload: {
      provider: provider,
    },
  };
};
