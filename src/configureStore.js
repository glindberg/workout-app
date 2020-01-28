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

//This function will be the first that runs when the app starts up/user refresh.
//verifyAuth() is dispatched because it ensures it will be the first thing happening to the store and if a user session exists it will authenticate our user before the rest of the app loads which will let us route to our secure route without showing login page.
export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
}
