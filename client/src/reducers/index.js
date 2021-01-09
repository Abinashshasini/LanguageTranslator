import { combineReducers } from "redux";
import alert from "./alert";
import translate from "./translate";
export default combineReducers({
  alert,
  translate,
});
