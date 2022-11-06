import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./reducers/counter";
import todos from "./reducers/todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
});
