import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const user = {
  username: "admin",
  password: "123",
};

// action
const login = createAction("LOGIN");
const logout = createAction("LOGOUT");

// reducer
const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(login, (state, action) => {
    if (
      action.payload.username === user.username &&
      action.payload.password === user.password
    ) {
      console.log("login success");
      return {
        ...state,
        isLogin: true,
      };
    } else {
      return "invalid username or password";
    }
  });
  builder.addCase(logout, (state, action) => {
    return {
      ...state,
      isLogin: false,
    };
  });
});
// store
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

// subscribe
store.subscribe(() => {
  console.log("store updated =", store.getState());
});

// dispatch
store.dispatch(
  login({
    username: "admin",
    password: "123",
  })
);

store.dispatch(logout());
