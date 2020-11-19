import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import subReducer from "../reducer/subReducer";
import streamReducer from "../reducer/streamReducer";

export default combineReducers({
  subReducer,
  streamReducer,
  form: formReducer,
});
