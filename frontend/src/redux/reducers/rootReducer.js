import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import usersReducer from "./userReducer";
import contactReducer from "./contactReducer";
import phoneReducer from "./phoneReducer";
import contactNameReducer from "./contactName";

const rootReducer = combineReducers({
  users: usersReducer,
  loader: loaderReducer,
  contacts: contactReducer,
  phone: phoneReducer,
  contactName: contactNameReducer,
});

export default rootReducer;
