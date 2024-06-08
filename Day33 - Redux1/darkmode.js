import { legacy_createStore } from "redux";

const initialState = {
  isDark: false,
};

const darkmodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return {
        ...state,
        isDark: action.payload,
      };
    case "LIGHT_MODE":
      return {
        ...state,
        isDark: action.payload,
      };
  }
};

const store = legacy_createStore(darkmodeReducer);
console.log("store : ", store.getState());

const actionChangeToDark = {
  type: "DARK_MODE",
  payload: true,
};

const actionChangeToLight = {
  type: "LIGHT_MODE",
  payload: false,
};

store.dispatch(actionChangeToDark);
console.log("store : ", store.getState());

store.dispatch(actionChangeToLight);
console.log("store : ", store.getState());
