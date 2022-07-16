import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import logMiddleware from "./middlewares/logMiddleware";
import authMiddleware from "./middlewares/authMiddleware";

import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // l'argument "undefined" nous permet de précharger l'état dans le magasin.
  undefined,
  composeWithDevTools(
    applyMiddleware(
      logMiddleware,
      authMiddleware,
    ),
  ),
);

export default store;
