import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import counterSlice from "./slices/counterSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

console.log("On Create Store", store.getState());

store.subscribe(() => {
  console.log("On Update Store", store.getState());
});

export default store;
