import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";

//  Normal Redux Store
// const store = createStore(reducer, applyMiddleware(thunk));

//  Redux Dev Tool Store
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhance(applyMiddleware(thunk)));

export default store;
