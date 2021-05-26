import { combineReducers } from "redux";
// import itemReducer from "./itemReducer";
// import auth from "../../../middleware/auth.middleware";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { favorites } from "./favorites.reducer";
import { providers } from "./providers.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  favorites,
  providers,
  dummy: () => "hi there, I'm a dummy reducer",
});

export default rootReducer;
