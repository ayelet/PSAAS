import { providerConstants } from "../constants";

export function providers(state = {}, action) {
  switch (action.type) {
    case providerConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case providerConstants.GETALL_SUCCESS:
      return {
        items: action.providers,
      };
    case providerConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case providerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to provider being deleted
      return {
        ...state,
        items: state.items.map((provider) =>
          provider.id === action.id ? { ...provider, deleting: true } : provider
        ),
      };
    case providerConstants.DELETE_SUCCESS:
      // remove deleted provider from state
      return {
        items: state.items.filter((provider) => provider.id !== action.id),
      };
    case providerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to provider
      return {
        ...state,
        items: state.items.map((provider) => {
          if (provider.id === action.id) {
            // make copy of provider without 'deleting:true' property
            const { deleting, ...providerCopy } = provider;
            // return copy of provider with 'deleteError:[error]' property
            return { ...providerCopy, deleteError: action.error };
          }

          return provider;
        }),
      };
    case providerConstants.ADD_FAV:
      return {
        ...state,
      };
    default:
      return state;
  }
}
