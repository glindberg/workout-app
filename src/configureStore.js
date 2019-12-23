import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

////////DESCRIPTION
// Initialize store, setup thunk middleware, call verifyAuth()-action
// and export the function so that it can provide this to the root of the app
//
//
////////

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
}
