import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);
//This is the Redux Store where our state will
//be handled. We use the createStore method,
//specifying the reducer successReducer
export const store = createStoreWithMiddleware(RootReducer);
