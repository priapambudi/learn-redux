import { legacy_createStore } from "redux";

const initialState = {
  isLogin: false,
};

const user = {
  username: "admin",
  password: "123",
};

// reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
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
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
  }
};

// store
const store = legacy_createStore(authReducer);
console.log("store created =", store.getState());

// subscribe (optional)
store.subscribe(() => {
  console.log("store updated =", store.getState());
});

// action
const login = {
  type: "LOGIN",
  payload: {
    username: "admin",
    password: "123",
  },
};

const logout = {
  type: "LOGOUT",
};

// dispatch
store.dispatch(login);
