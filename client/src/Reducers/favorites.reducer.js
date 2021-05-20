import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem("favorites"));
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = [];

export function favorites(state = initialState, action) {
  switch (action.type) {
    case userConstants.ADD_FAV:
      return {
        ...state,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
