import { createStore } from "redux";
import RootReducer from "./reducers";

//This is the Redux Store where our state will
//be handled. We use the createStore method,
//specifying the reducer successReducer
export const store = createStore(RootReducer);
